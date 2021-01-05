<template>
  <div>
    <!-- navbar -->
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node.js</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Create new employee</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list-employees">List all employees</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <!-- /navbar -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>
