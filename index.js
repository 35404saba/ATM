#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; //Dollar
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount withdraw:",
                type: "number",
            },
        ]);
        if (amountAns.amount > mybalance) {
            console.log("insufficient funda!");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`your current balance is:${mybalance}`);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`;your balance is:${mybalance}`);
    }
    else {
        console.log("incorrect pin number");
    }
}
