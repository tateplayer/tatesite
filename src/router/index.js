import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

// PROJECT VIEWS
import projectView from '@/components/projects/layout'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    /* project layout */
    {
      path: "/projects/:name",
      name: "project-view",
      component: projectView
    }
  ],
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0, behavior: "smooth" }
  }
})

export default router
