
import { CSVWriter } from "./index";

interface Employee {
  id: number 
  name: string 
  role: string 
  salary: number 
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
  {id:1, name: "traniel", salary: 200000, role: "Software Engineer"},
  {id:2, name: "christi", salary: 1000000, role: "Life Coach"},
  {id:3, name: "traniel jr", salary: 260000, role: "Photographer"},
  {id:4, name: "yazmyne", salary: 500000, role: "Entrepreneur"},
])

employeeWriter.save('data/employees.csv')

employeeWriter.addRows([
  {id:1, name: "traniel", salary: 200000, role: "Software Engineer"},
  {id:2, name: "christi", salary: 1000000, role: "Life Coach"},
  {id:3, name: "traniel jr", salary: 260000, role: "Photographer"},
  {id:4, name: "yazmyne", salary: 500000, role: "Entrepreneur"},
])


