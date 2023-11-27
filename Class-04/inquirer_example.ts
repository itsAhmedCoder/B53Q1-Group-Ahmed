// Author: Ahmed
// Group: B53Q1 Group-Ahmed
// Description: Inquirer Example

// Import Inquirer Package
import inquirer from "inquirer";

// Get Input from the User
let userinput = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        message: "Enter name:"
    },
    {
        name: "rollno",
        type: "number",
        message: "Enter roll no:"
    }
]);

// Display user inputs
console.log(`Your Name: ${userinput.name}`);
console.log(`Your Roll No: ${userinput.rollno}`);
