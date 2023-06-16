DROP DATABASE IF EXISTS employeedb;
CREATE DATABASE employeedb;
USE employeedb;

CREATE TABLE department(
    id int primary key auto_increment,
    name varchar(30) not null
);

CREATE TABLE role(
    id int primary key auto_increment,
    title varchar(30) not null,
    salary decimal,
    department_id int
);

CREATE TABLE employee(
    id int primary key auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int
);

insert into department(name)
values ('engineering'), ('management'), ('programming');

insert into role (title, salary, department_id)
values ('engineer', 80000, 1), ('manager', 72000, 2), ('programmer', 77000, 3);

insert into employee(first_name, last_name, role_id, manager_id)
values ('Tyler', 'Durden', 3, 2), ('Michael', 'Scott', 2, null), ('Rick', 'Sanchez', 1, 2);
