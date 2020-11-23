import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'

// Pages
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'

// Add
import Add from 'src/components/Dashboard/Views/Add.vue'

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/login',
    children: [
      {
        path: 'add',
        name: 'Add',
        component: Add
      }
    ]
  },
  loginPage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
