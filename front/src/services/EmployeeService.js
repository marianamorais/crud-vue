/**
* file: src/services/EmployeeService.js
* data: 09/01/2021
* description: file responsible for Apis request methods via HTTP
*/

import Api from './Api';

export default {
  /**
   * Metodo responsavel por criar um(a) novo(a) 'Employee'
   *(POST): localhost:3000/api/employees
  */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Metodo responsavel por listar todos os funcionarios
   *(GET): localhost:3000/api/employees
  */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
    * Metodo responsavel por listar por id um determinado 'employee'
    * (GET): localhost:3000/api/employees/:id
  */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
    * Metodo responsavel por atualizar um determinado 'Employee' por Id
    * (GET): localhost:3000/api/employees/:id
  */
  async updateEmployee(id) {
    try {
      const response = await Api().put(`/employees/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
    * Metodo responsavel por excluir um determinado 'Employee' por Id
    * (GET): localhost:3000/api/employees/:id
  */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
