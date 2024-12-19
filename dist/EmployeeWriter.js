"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: "traniel", salary: 200000, role: "Software Engineer" },
    { id: 2, name: "christi", salary: 1000000, role: "Life Coach" },
    { id: 3, name: "traniel jr", salary: 260000, role: "Photographer" },
    { id: 4, name: "yazmyne", salary: 500000, role: "Entrepreneur" },
]);
employeeWriter.save('data/employees.csv');
employeeWriter.addRows([
    { id: 1, name: "traniel", salary: 200000, role: "Software Engineer" },
    { id: 2, name: "christi", salary: 1000000, role: "Life Coach" },
    { id: 3, name: "traniel jr", salary: 260000, role: "Photographer" },
    { id: 4, name: "yazmyne", salary: 500000, role: "Entrepreneur" },
]);
