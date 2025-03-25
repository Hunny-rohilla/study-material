const fs = require("fs");
const readline = require("readline-sync");

// File to store account data
const FILE_PATH = "account.json";

// Load account data from file or initialize an empty object
const loadAccount = () => {
    try {
        return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
    } catch (error) {
        return { balance: 0, transactions: [] };
    }
};

// Save account data to file
const saveAccount = (account) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(account, null, 2), "utf8");
};

// Bank Account Class
class BankAccount {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
        this.transactions = [];
    }

    // Deposit Money
    deposit(amount) {
        if (amount <= 0) {
            console.log("⚠️ Deposit amount must be greater than zero!");
            return;
        }
        this.balance += amount;
        this.transactions.push(`Deposited ₹${amount}`);
        console.log(`✅ ₹${amount} Deposited Successfully!`);
    }

    // Withdraw Money
    withdraw(amount) {
        if (amount <= 0) {
            console.log("⚠️ Withdrawal amount must be greater than zero!");
            return;
        }
        if (amount > this.balance) {
            console.log("❌ Insufficient funds!");
            return;
        }
        this.balance -= amount;
        this.transactions.push(`Withdrew ₹${amount}`);
        console.log(`✅ ₹${amount} Withdrawn Successfully!`);
    }

    // Check Balance
    checkBalance() {
        console.log(`💰 Your current balance is: ₹${this.balance}`);
    }

    // View Transaction History
    viewTransactions() {
        if (this.transactions.length === 0) {
            console.log("📂 No transactions found!");
        } else {
            console.log("\n📜 Transaction History:");
            this.transactions.forEach((transaction, index) => {
                console.log(`${index + 1}. ${transaction}`);
            });
        }
    }
}

// Function to run the CLI menu
const runBankApp = () => {
    let accountData = loadAccount();
    let account = new BankAccount(accountData.name || "User", accountData.balance);
    account.transactions = accountData.transactions || [];

    console.log("\n🏦 Welcome to the CLI Bank Account Simulation!");

    while (true) {
        console.log("\n1️⃣. Deposit Money");
        console.log("2️⃣. Withdraw Money");
        console.log("3️⃣. Check Balance");
        console.log("4️⃣. View Transaction History");
        console.log("5️⃣. Exit");
        let choice = readline.question("Enter your choice: ");

        switch (choice) {
            case "1":
                let depositAmount = parseFloat(readline.question("Enter deposit amount: "));
                account.deposit(depositAmount);
                break;
            case "2":
                let withdrawAmount = parseFloat(readline.question("Enter withdrawal amount: "));
                account.withdraw(withdrawAmount);
                break;
            case "3":
                account.checkBalance();
                break;
            case "4":
                account.viewTransactions();
                break;
            case "5":
                saveAccount({ name: account.name, balance: account.balance, transactions: account.transactions });
                console.log("👋 Thank you for using our Bank System!");
                return;
            default:
                console.log("⚠️ Invalid choice! Try again.");
        }
    }
};

// Run the Bank Application
runBankApp();