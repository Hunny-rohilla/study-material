const crypto = require("crypto");
const fs = require("fs");
const readline = require("readline-sync");

// Encryption Configuration
const ALGORITHM = "aes-256-cbc";

// Function to Encrypt a File
const encryptFile = (inputFile, outputFile, password) => {
    try {
        const key = crypto.scryptSync(password, "salt", 32);
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

        const input = fs.createReadStream(inputFile);
        const output = fs.createWriteStream(outputFile);

        // Write IV to the output file first
        output.write(iv);

        input.pipe(cipher).pipe(output);

        output.on("finish", () => {
            console.log(`✅ File encrypted successfully! Saved as: ${outputFile}`);
        });
    } catch (error) {
        console.error("❌ Error encrypting file:", error.message);
    }
};

const decryptFile = (inputFile, outputFile, password) => {
    try {
        const key = crypto.scryptSync(password, "salt", 32);
        const input = fs.readFileSync(inputFile);

        // Extract IV from the beginning of the file (first 16 bytes)
        const iv = input.slice(0, 16);
        const encryptedData = input.slice(16);

        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
        const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);

        fs.writeFileSync(outputFile, decrypted);
        console.log(`✅ File decrypted successfully! Saved as: ${outputFile}`);
    } catch (error) {
        console.error("❌ Error decrypting file:", error.message);
    }
};

// CLI Menu
const runCLI = () => {
    console.log("\n🔐 File Encryption & Decryption CLI");
    console.log("1️⃣ Encrypt a File");
    console.log("2️⃣ Decrypt a File");
    console.log("3️⃣ Exit");

    const choice = readline.question("Enter your choice: ");

    switch (choice) {
        case "1":
            const inputEncrypt = readline.question("Enter the file to encrypt: ");
            const outputEncrypt = readline.question("Enter the output encrypted file name: ");
            const passwordEncrypt = readline.question("Enter encryption password: ", { hideEchoBack: true });
            encryptFile(inputEncrypt, outputEncrypt, passwordEncrypt);
            break;

        case "2":
            const inputDecrypt = readline.question("Enter the encrypted file to decrypt: ");
            const outputDecrypt = readline.question("Enter the output decrypted file name: ");
            const passwordDecrypt = readline.question("Enter decryption password: ", { hideEchoBack: true });
            decryptFile(inputDecrypt, outputDecrypt, passwordDecrypt);
            break;

        case "3":
            console.log("👋 Exiting...");
            return;

        default:
            console.log("⚠️ Invalid choice! Try again.");
    }
};

// Run the CLI
runCLI();
