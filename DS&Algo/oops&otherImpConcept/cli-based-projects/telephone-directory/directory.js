const fs = require("fs");
const readline = require("readline-sync");

const FILE_PATH = "contacts.json";

// Load existing contacts from file or initialize an empty list
const loadContacts = () => {
    try {
        return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
    } catch (error) {
        return [];
    }
};

// Save contacts to file
const saveContacts = (contacts) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2), "utf8");
};

// Function to add a new contact
const addContact = () => {
    const name = readline.question("Enter Name: ");
    const phone = readline.question("Enter Phone: ");
    const email = readline.question("Enter Email: ");

    let contacts = loadContacts();
    
    // Check if contact already exists
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        console.log("⚠️ Contact already exists!");
        return;
    }

    contacts.push({ name, phone, email });
    saveContacts(contacts);
    console.log("✅ Contact Added Successfully!");
};

// Function to list all contacts
const listContacts = () => {
    const contacts = loadContacts();
    if (contacts.length === 0) {
        console.log("📂 No contacts found!");
        return;
    }

    console.log("\n📞 Telephone Directory:");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} - ${contact.phone} - ${contact.email}`);
    });
};

// Function to search for a contact
const searchContact = () => {
    const name = readline.question("Enter Name to Search: ");
    const contacts = loadContacts();

    const foundContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (foundContacts.length === 0) {
        console.log("❌ Contact not found!");
    } else {
        console.log("\n🔍 Search Results:");
        foundContacts.forEach(contact => {
            console.log(`${contact.name} - ${contact.phone} - ${contact.email}`);
        });
    }
};

// Function to update a contact
const updateContact = () => {
    const name = readline.question("Enter Name to Update: ");
    let contacts = loadContacts();

    const index = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
    
    if (index === -1) {
        console.log("❌ Contact not found!");
        return;
    }

    const phone = readline.question("Enter New Phone (Leave blank to keep current): ") || contacts[index].phone;
    const email = readline.question("Enter New Email (Leave blank to keep current): ") || contacts[index].email;

    contacts[index] = { name, phone, email };
    saveContacts(contacts);
    console.log("✅ Contact Updated Successfully!");
};

// Function to delete a contact
const deleteContact = () => {
    const name = readline.question("Enter Name to Delete: ");
    let contacts = loadContacts();

    const newContacts = contacts.filter(contact => contact.name.toLowerCase() !== name.toLowerCase());

    if (newContacts.length === contacts.length) {
        console.log("❌ Contact not found!");
        return;
    }

    saveContacts(newContacts);
    console.log("🗑️ Contact Deleted Successfully!");
};

// Function to show menu
const showMenu = () => {
    console.log("\n📞 Telephone Directory");
    console.log("1. Add Contact");
    console.log("2. List Contacts");
    console.log("3. Search Contact");
    console.log("4. Update Contact");
    console.log("5. Delete Contact");
    console.log("6. Exit");
};

// Main Function to Run the CLI
const main = () => {
    while (true) {
        showMenu();
        const choice = readline.question("Enter your choice: ");

        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                listContacts();
                break;
            case "3":
                searchContact();
                break;
            case "4":
                updateContact();
                break;
            case "5":
                deleteContact();
                break;
            case "6":
                console.log("👋 Goodbye!");
                return;
            default:
                console.log("⚠️ Invalid choice! Try again.");
        }
    }
};

// Run the program
main();
