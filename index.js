const inquirer = require("inquirer");

function getUserInput() {
    return inquirer.prompt({
        type: 'input',
        message: 'Please input your github username',
    },
        {
            type: 'list',
            message: 'Please choose your favorite color',
            choices: [
                {
                    name: 'Red',
                    value: 'red'
                },
                {
                    name: 'Blue',
                    value: 'blue'
                }
            ]
        })
}
async function main() {
    const response = await getUserInput();
}

await getUserInput();
console.log(response);