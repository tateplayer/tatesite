import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '@/components/Home'
import Projects from '@/components/Projects'

// PROJECT VIEWS
import projectView from '@/components/projects/layout'

Vue.use(Router)

export default new Router({
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
  mode: "history"
})
