const inquirer = require('inquirer')
const connection = require('./connection')


function startApp() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What action do you want?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a new department",
                "Add a new role",
                "Add a new employee",
                "Update employee roles",
                "Exit"
            ]
        }])
        .then(function (response) {
            switch (response.action) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a new department":
                    addDepartment();
                    break;
                case "Add a new role":
                    addRole();
                    break;
                case "Add a new employee":
                    addEmployee();
                    break;
                case "Update employee roles":
                    employeeUpdate();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
};

function viewDepartments(){

}

function viewRoles() {

}

function viewEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function employeeUpdate() {
    
}
startApp()