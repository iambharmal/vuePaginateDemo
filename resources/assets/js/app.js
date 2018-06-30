
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');
// declaring vue
const AddPost = Vue.component('AddPost', require('./components/AddPost.vue'));
const DeletePost = Vue.component('DeletePost', require('./components/DeletePost.vue'));
const EditPost = Vue.component('EditPost', require('./components/EditPost.vue'));
const ListPosts = Vue.component('ListPosts', require('./components/ListPosts.vue'));
const ViewPost = Vue.component('ViewPost', require('./components/ViewPost.vue'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// registering Modules
Vue.use(VueRouter, VueAxios, Axios);

// declaring routes
const routes = [
    {
        name: 'AddPost',
        path: '/add-post',
        component: AddPost
    },
    {
        name: 'DeletePost',
        path: '/delete-post',
        component: DeletePost
    },
    {
        name: 'EditPost',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'ListPosts',
        path: '/',
        component: ListPosts
    },
    {
        name: 'ViewPost',
        path: '/view/:id',
        component: ViewPost
    },
];

const router = new VueRouter({ mode: 'history', routes:routes });

Vue.component('example-component', require('./components/ExampleComponent.vue'));


new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app');
// // const app = new Vue({
// //     el: '#app'
// });
