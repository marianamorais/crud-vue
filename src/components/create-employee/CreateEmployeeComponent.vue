<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <div class="form-group">
            <label class="font-weight-bold">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type the name"
              v-model="employee.name" required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Job role</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type the job role"
              v-model="employee.job_role" required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              class="form-control"
              placeholder="Type the salary"
              v-model="employee.salary" required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employee.birth" required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Registration</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type the registration"
              v-model="employee.registration" required>
          </div>

          <div class="form-group">
            <button class="btn btn-primary" type="submit">+ Employee</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    name: 'CreateEmployeeComponent',
  },
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        registration: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {

    },
  },
};
</script>

<style>

</style>
