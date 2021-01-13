/**
 * file: controllers/employee-routes.js
 * description: file responsible for CRUD logic (API - Employee)
 * data in postgresql: https://www.postgresqltutorial.com/postgresql-date/
 */

 const db = require("../config/database");

 // ==> Método responsável por criar um novo 'Employee':
 exports.createEmployee = async (req, res) => {
   const { name, job_role, salary, birth, registration } = req.body;
   try {
     console.log(name, job_role, salary, birth, registration);
     const { rows } = await db.query(
       "INSERT INTO employee (name, job_role, salary, birth, registration) VALUES ($1, $2, $3, $4, $5)",
       [name, job_role, salary, birth, registration]
     );
     res.status(201).send({
       message: "Employee added successfully!",
       body: {
         employee: { name, job_role, salary, birth, registration },
       },
     });

   } catch (error) {
     console.error('createEmployee', error);
     res.status(500).send({
       message: "Ocorreu um erro."
     });
   }
 };
 
 // ==> Método responsável por listar todos os 'Employees':
 exports.listAllEmployees = async (req, res) => {
   try {
     const { rows } = await db.query(`SELECT 
                                       employee_id,
                                       name, 
                                       job_role, 
                                       salary, 
                                       registration, 
                                       to_char(birth, 'yyyy-MM-dd') as birth 
                                     FROM employee ORDER BY name asc`);
     res.status(200).send(rows);
   } catch (error) {
     console.error('listAllEmployees', error);
     res.status(500).send({
       message: "Ocorreu um erro."
     });
   }
 };
 
 // ==> Método responsável por listar um determinado 'Employee' por Id:
 exports.findEmployeeById = async (req, res) => {
   const { id } = req.params;
   try {
     const { rows } = await db.query(`SELECT 
                                       employee_id,
                                       name, 
                                       job_role,
                                       salary,
                                       registration,
                                       to_char(birth, 'yyyy-MM-dd') as birth 
                                     FROM employee WHERE employee_id = $1`,
       [id]
     );
     if (!rows.length) {
       throw 'employee_not_found';
     }
     res.status(200).send(rows[0]);
   } catch (error) {
     console.error('findEmployeeById', error);
     if (error == 'employee_not_found') {
       res.status(404).send({
         message: "Employee not found."
       });
     } else {
       res.status(500).send({
         message: "Ocorreu um erro."
       });
     }
   }
 };
 
 // ==> Método responsável por atualizar um determinado 'Employee' por Id:
 exports.updateEmployeeById = async (req, res) => {
   const { id } = req.params;
   try {
     const { name, job_role, salary, birth, registration } = req.body;
     const { rows } = await db.query(`UPDATE employee 
                                     SET name = $1, 
                                     job_role = $2, 
                                     salary = $3, 
                                     birth = $4, 
                                     registration = $5 
                                     WHERE employee_id = $6`,
       [name, job_role, salary, birth, registration, id]
     );
     res.status(200).send({ message: "Employee Updated Successfully!" });
   } catch (error) {
     console.error('updateEmployeeById', error);
     res.status(500).send({
       message: "Ocorreu um erro."
     });
   }
 };
 
 // ==> Método responsável por deletar um determinado 'Employee' por Id:
 exports.deleteEmployeeById = async (req, res) => {
   const { id } = req.params;
   try {
     await db.query("DELETE FROM employee WHERE employee_id = $1", [id]);
     res.status(200).send({ message: "Employee deleted successfully!" });
   } catch (error) {
     console.error('deleteEmployeeById', error);
     res.status(500).send({
       message: "Ocorreu um erro."
     });
   }
 };