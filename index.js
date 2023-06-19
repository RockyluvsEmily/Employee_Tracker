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
    connection.query('select * from department', (err,res) => {
        if(err) throw err
        console.table(res)
        startApp()
    })
}

function viewRoles() {
    connection.query('select * from role', (err, res) => {
        if (err) throw err
        console.table(res)
        startApp()
    })
}

function viewEmployees() {
    connection.query('select * from employee', (err, res) => {
        if (err) throw err
        console.table(res)
        startApp()
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            name: "addDept",
            message: "What is the name of the new department?"
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO department SET ?", {
            name: answer.addDept
        },
            function (err, res) {
                if (err) throw err;
                console.log(" Department Added");
                startApp();
            }
        );
    });
    
}

function addRole() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        //asking for the three properties on the roles table      
        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of the new role?"
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary of this position?",
            },
            {
                name: "deptId",
                type: "list",
                message: "Select a department for this role",
                choices: res.map(item => item.name)
            }
        ]).then(function (answers) {
            const selectedDept = res.find(dept => dept.name === answers.deptId);
            connection.query("INSERT INTO role SET ?",
                {
                    title: answers.title,
                    salary: answers.salary,
                    dept_id: selectedDept.id
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("New role added");
                    startApp();
                }
            );
        });
    })
}

function addEmployee() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        //asking for the first and last names of the people      
        inquirer.prompt([
            {
                first_name: "name",
                type: "input",
                message: "What is your first name?",
            },
            {
                last_name: "name",
                type: "input",
                message: "What is your last name?",
            },
    
        ]).then(function (answers) {
            const selectedDept = res.find(dept => dept.name === answers.deptId);
            connection.query("INSERT INTO role SET ?",
                {
                    title: answers.title,
                    salary: answers.salary,
                    dept_id: selectedDept.id
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("New role added");
                    startApp();
                }
            );
        });
    })

}

function employeeUpdate() {

}
startApp()