<template>
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a href="" class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node + Azure</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Create new employee</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list-employee">List all employees</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/edit-employee">Update employees</router-link>
        </li>
      </ul>
    </nav>
    <!-- /navbar -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>
