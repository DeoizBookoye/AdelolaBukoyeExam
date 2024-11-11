// Part 1: Class and Objects
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = newPrice;
        return this.price;
    }

    sellProduct(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }
        if (quantity > this.quantity) {
            return `Error: Not enough stock. Current stock: ${this.quantity}`;
        }
        this.quantity -= quantity;
        return quantity * this.price;
    }

    restockProduct(quantity) {
        if (quantity <= 0) {
            throw new Error("Restock quantity must be positive");
        }
        this.quantity += quantity;
        return this.quantity;
    }
}

// Part 2: Arrays & Sets
function findUniqueWords(words) {
    return [...new Set(words)];
}

function commonElements(array1, array2) {
    const set1 = new Set(array1);
    return array2.filter(element => set1.has(element));
}

// Part 3: Maps
class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        if (grade < 0 || grade > 100) {
            throw new Error("Grade must be between 0 and 100");
        }
        this.grades.set(studentName, grade);
        return true;
    }

    getGrade(studentName) {
        if (!this.grades.has(studentName)) {
            return "Student not found";
        }
        return this.grades.get(studentName);
    }

    updateGrade(studentName, newGrade) {
        if (!this.grades.has(studentName)) {
            return "Student not found";
        }
        if (newGrade < 0 || newGrade > 100) {
            throw new Error("Grade must be between 0 and 100");
        }
        this.grades.set(studentName, newGrade);
        return true;
    }

    removeStudent(studentName) {
        if (!this.grades.has(studentName)) {
            return "Student not found";
        }
        return this.grades.delete(studentName);
    }
}

// Part 4: Cybersecurity
function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    return specialChars.test(password);
}

// Interactive Testing System
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log("\n=== Testing Menu ===");
    console.log("1. Test Product Class");
    console.log("2. Test Arrays & Sets");
    console.log("3. Test Student Grades");
    console.log("4. Test Password Validation");
    console.log("5. Exit");
    console.log("==================\n");
}

function testProductClass() {
    console.log("\n=== Testing Product Class ===");
    const laptop = new Product("Laptop", 1000, 50);
    
    console.log("Initial laptop stock:", laptop.quantity);
    console.log("Selling 5 laptops. Total sale:", laptop.sellProduct(5));
    console.log("Current stock:", laptop.quantity);
    console.log("Restocking 10 laptops. New stock:", laptop.restockProduct(10));
    console.log("Updating price to $1200:", laptop.updatePrice(1200));
    console.log("Attempting to sell more than stock:", laptop.sellProduct(100));
}

function testArraysAndSets() {
    console.log("\n=== Testing Arrays & Sets ===");
    const words = ["apple", "banana", "apple", "orange", "banana"];
    console.log("Original array:", words);
    console.log("Unique words:", findUniqueWords(words));
    
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    console.log("\nArray 1:", array1);
    console.log("Array 2:", array2);
    console.log("Common elements:", commonElements(array1, array2));
}

function testStudentGrades() {
    console.log("\n=== Testing Student Grades ===");
    const studentGrades = new StudentGrades();
    
    console.log("Adding John's grade:", studentGrades.addGrade("John", 85));
    console.log("Adding Jane's grade:", studentGrades.addGrade("Jane", 90));
    console.log("John's grade:", studentGrades.getGrade("John"));
    console.log("Updating John's grade:", studentGrades.updateGrade("John", 88));
    console.log("John's new grade:", studentGrades.getGrade("John"));
    console.log("Removing Jane:", studentGrades.removeStudent("Jane"));
    console.log("Trying to get Jane's grade:", studentGrades.getGrade("Jane"));
}

function testPasswordValidation() {
    console.log("\n=== Testing Password Validation ===");
    const testPasswords = [
        "password123",
        "P@ssw0rd!",
        "short",
        "NoSpecialChars123",
        "Has@Special"
    ];
    
    testPasswords.forEach(password => {
        console.log(`Password "${password}" is ${validatePassword(password) ? 'valid' : 'invalid'}`);
    });
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            testProductClass();
            break;
        case '2':
            testArraysAndSets();
            break;
        case '3':
            testStudentGrades();
            break;
        case '4':
            testPasswordValidation();
            break;
        case '5':
            console.log("Exiting...");
            readline.close();
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
    promptUser();
}

function promptUser() {
    displayMenu();
    readline.question('Enter your choice (1-5): ', handleChoice);
}

// Start the interactive testing
console.log("Welcome to the Interactive Testing System");
promptUser();