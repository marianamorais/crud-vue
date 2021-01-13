<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add new employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- name -->
          <div class="form-group">
            <label class="font-weight-bold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Type the name"
              v-model="employeeForm.name"
              :class="{ 'is-invalid': isSubmitted && $v.employeeForm.name.$error }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.name.required"
              class="invalid-feedback"
            >
              'Employee name' field is required!
            </div>
          </div>
          <!-- /name -->

          <!-- job -->
          <div class="form-group">
            <label class="font-weight-bold">Job role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              placeholder="Type the job role"
              v-model="employeeForm.job_role"
              :class="{ 'is-invalid': isSubmitted && $v.employeeForm.job_role.$error }"
            >
            <div
              v-if="isSubmitted && !$v.employeeForm.job_role.required"
              class="invalid-feedback"
            >
            'Job role' field is required!
            </div>
          </div>
          <!-- /job -->

          <!-- salary -->
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              placeholder="Type the salary"
              v-model="employeeForm.salary"
              :class="{ 'is-invalid': isSubmitted && $v.employeeForm.salary.$error }"
            >
            <div
              v-if="isSubmitted && !$v.employeeForm.salary.required"
              class="invalid-feedback"
            >
            'Salary' field is required!
            </div>
          </div>
          <!-- /salary -->

          <!-- birth -->
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employeeForm.birth"
              :class="{ 'is-invalid': isSubmitted && $v.employeeForm.birth.$error }"
            >
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.required"
              class="invalid-feedback"
            >
            'Birth' field is required!
            </div>
          </div>
          <!-- birth -->

          <!-- registration -->
          <div class="form-group">
            <label class="font-weight-bold">Registration</label>
            <input
              type="text"
              id="registration"
              name="registration"
              class="form-control"
              placeholder="Type the registration"
              v-model="employeeForm.registration"
              :class="{ 'is-invalid': isSubmitted &&
                $v.employeeForm.registration.$error }"
            >
            <div
              v-if="isSubmitted && !$v.employeeForm.registration.required"
              class="invalid-feedback"
            >
            'Registration' field is required!
            </div>
          </div>
          <!-- /registration -->

          <div class="form-group">
            <button @click="submitNewEmployee" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
import EmployeeService from '../../../services/EmployeeService';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    name: 'CreateEmployeeComponent',
  },
  data() {
    return {
      employeeForm: {
        name: null,
        job_role: null,
        salary: null,
        birth: null,
        registration: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      registration: { required },
    },
  },
  methods: {
    handleSubmitForm() { },
    async submitNewEmployee() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Opps!', 'You need to include all the required fields', 'error');
          return;
        }

        await EmployeeService.createNewEmployee(this.employeeForm);
        this.$swal({
          title: 'Employee added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        // eslint-disable-next-line no-unused-vars
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
