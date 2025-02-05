const express = require("express");
require("dotenv").config();
const path = require("path");
const QRCode = require("qrcode");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("index", { title: "QR Code Generator" });
});

// QR Code Generator Form Page
app.get("/qrcode-generater", (req, res) => {
    res.render("qrcode-generator", { title: "Generate QR Code" });
});

// Generate and Show QR Code
app.post("/show-qrcode", async (req, res) => {
    try {
        const { upi, name, amount } = req.body;

        // Function to check if UPI ID is valid
        const isValidUPI = (upi) => /^[a-zA-Z0-9.\-_]+@[a-zA-Z]+$/.test(upi);

        // Input validation
        if (!upi || !name) {
            return res.render("qrcode-generator", { 
                title: "Generate QR Code", 
                error: "Please enter all required fields!" 
            });
        }

        if (!isValidUPI(upi)) {
            return res.render("qrcode-generator", { 
                title: "Generate QR Code", 
                error: "Invalid UPI ID format! Example: username@bank" 
            });
        }

        if (!amount || parseFloat(amount) <= 0 || parseFloat(amount) > 10000) {
            return res.render("qrcode-generator", { 
                title: "Generate QR Code", 
                error: "Amount must be greater than ₹0 and less than ₹10,000" 
            });
        }

        // Generate UPI Payment URL
        const upiString = `upi://pay?pa=${upi}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
        const qrCodeDataUrl = await QRCode.toDataURL(upiString);

        // Render QR Code Page
        res.render("showQrcode", {
            title: "Your QR Code",
            imgQrCODE: qrCodeDataUrl
        });

    } catch (error) {
        console.error("Error generating QR Code:", error);
        res.status(500).render("404-page", {
            title: "Internal Server Error",
            error: "Something went wrong. Please try again later."
        });
    }
});


app.use((req, res) => {
    res.status(404).render("404-page", {
        title: "Page Not Found",
        error: "Oops! The page you're looking for doesn't exist.",
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
