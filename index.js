#!/usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "Enter your todo: ",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Enter more in your todo: ",
            default: true,
        }
    ]);
    if (todosQuestion.firstQuestion.trim() !== '') {
        todoList.push(todosQuestion.firstQuestion.trim());
        console.log(todoList);
    }
    condition = todosQuestion.secondQuestion;
}
