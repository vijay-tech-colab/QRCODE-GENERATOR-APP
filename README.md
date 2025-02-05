# QR Code Generator for UPI Payments

## 📌 Overview
This is a **Node.js and Express.js** based web application that generates **QR codes** for UPI payments. Users can enter their **UPI ID, name, and amount**, and the app will generate a **scannable QR code** for quick payments.

## 🚀 Features
✅ **Validate UPI ID format** (e.g., `username@bank`)<br>
✅ **Ensure the amount is between ₹1 and ₹10,000**<br>
✅ **Generate QR code for UPI payments**<br>
✅ **Built with Node.js, Express.js, EJS, and QRCode.js**<br>
✅ **Responsive UI using EJS templates**<br>

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Database:** None (no storage required)
- **Libraries:**
  - `express` (Web framework for Node.js)
  - `qrcode` (QR Code generator)
  - `dotenv` (Manage environment variables)

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/vijay-tech-colab/QRCODE-GENERATOR-APP.git
cd qr-code-generator
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Create a `.env` File
Create a `.env` file in the root directory and set your environment variables:
```
PORT=3000
```
### 4️⃣ Run the Application
```sh
npm start
```
The server will start at: **`http://localhost:3000`**

## 📌 Usage
1. Open **`http://localhost:3000`** in your browser.
2. Enter your **UPI ID**, **name**, and **amount**.
3. Click on **Generate QR Code**.
4. Scan the generated QR code with a UPI payment app to make a payment.


## 🤝 Contributing
Feel free to submit a pull request or open an issue for any suggestions or improvements.

## 🌟 Author
**Vijay Kumar** - [GitHub](https://github.com/vijay-tech-colab)

---
🚀 **Happy Coding!** 🚀

