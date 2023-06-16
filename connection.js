const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost", 
    user:'root',
    password:'Whitesox3!',
    database:'employeedb'
});

connection.connect(function(){
    console.log('database connected')
})
module.exports=connection