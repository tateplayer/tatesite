import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '@/components/Home'
import Projects from '@/components/Projects'

// PROJECT VIEWS
import projectView from '@/components/projects/Layout'

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
    /* personal projects */
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
