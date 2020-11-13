<template>
  <div id="app">
    <div class="main-navigation">
      <div class="main-navigation-inner">
        <div class="main-navigation-wrapper">
          <div>
            <router-link to="/" class="main-navigation-title">TATE PLAYER</router-link>
          </div>
          <div class="main-navigation-separator">

          </div>
          <div id="main-navigation-list-outer">
            <ul id="main-nav-list">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
              <li>
                <router-link to="/about">About Me</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact Info</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
