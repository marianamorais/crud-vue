import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employees',
    name: 'List All Employess',
    component: () => import('../components/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employees/:id',
    name: 'Update Employess',
    component: () => import('../components/edit-employee/EditEmployeeComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  // When a page loads then use NProgress
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route using the progress bar
  NProgress.done();
});
export default router;
