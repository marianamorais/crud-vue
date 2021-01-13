// @ts-nocheck
/**
 * file: routes/employee-routes.js
 * description: file responsible for API routes
 */

 const router = require('express-promise-router')();
 const employeeController = require('../controllers/employee.controller');
 
 // ==> Defining CRUD routes - 'Employee'
 
 // ==> Route responsible for creating a new 'Collaborator': (POST): localhost:3000/api/employees
 router.post('/employees', employeeController.createEmployee);
 
 // ==> Route responsible for listing all 'Collaborators': (GET): localhost: 3000 / api / employees
 router.get('/employees', employeeController.listAllEmployees);
 
 // ==> Route responsible for listing a 'Contributor' by Id: (GET): localhost: 3000 / api / employees /: id
 router.get('/employees/:id', employeeController.findEmployeeById)
 
 // ==> Route responsible for updating a 'Employee by Id: (PUT): localhost: 3000 / api / employees /: id
 router.put('/employees/:id', employeeController.updateEmployeeById)
 
 // ==> Route responsible for deleting / deleting a specific 'Contributor by Id: localhost: 3000 / api / employees /: id
 router.delete('/employees/:id', employeeController.deleteEmployeeById);
 
 module.exports = router;