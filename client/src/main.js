import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Vue from 'vue'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	history: true,
	hashbang: false,
})

router.map({
	'/home': {
		component: Home
	},
	'/about': {
		component: About
	},
	'/contact': {
		component: Contact
	}
})

// router.redirect({
// 	'*': '/home'
// })

router.start(App, 'div')




// new Vue({
//   el: 'body',
//   components: { App },
// })