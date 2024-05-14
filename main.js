#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Enter your first Number: ",
        type: "number"
    },
    {
        name: "secondNumber",
        meesage: "Enter your second Number: ",
        type: "number"
    },
    {
        name: "operator",
        message: "Select one of the operator to perform operation:",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("select valid operator.");
}
