<template>
  <div id="app">
    <div class="main-navigation">
      <div class="main-navigation-inner">
        <div class="main-navigation-wrapper">
          <div id="main-nav-name" v-bind:style="navTitleStyle">
            <router-link to="/" class="main-navigation-title">TATE PLAYER</router-link>
          </div>
          <div class="main-navigation-separator">

          </div>
          <div id="main-navigation-list-outer">
            <ul id="main-nav-list">
              <router-link to="/" tag="li">
                Home
              </router-link>
              <router-link to="/projects" tag="li">
                Portfolio
              </router-link>
              <router-link to="/about" tag="li">
                About
              </router-link>
              <router-link to="/contact" tag="li">
                Contact
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <transition name="loader-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navTitleStyle: {
        opacity: 0,
        maxWidth: "0px"
      }
    }
  },
  watch: {
    $route (to, from) {
      this.updateHeaderStyles()
    }
  },
  mounted () {
    this.updateHeaderStyles()
  },
  methods: {
    updateHeaderStyles: function () {
      if (this.$route.name !== "home") {
        this.navTitleStyle = {
          maxWidth: "300px",
          opacity: 100
        }
      } else {
        this.navTitleStyle = {
          maxWidth: "0px",
          opacity: 0
        }
      }
    }
  }
}
</script>

<style>
  .loader-fade-enter-active, .loader-fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }
  .loader-fade-enter-active {
    transition-delay: .25s;
  }
  .loader-fade-enter, .loader-fade-leave-active {
    opacity:0;
  }

  .loading-overlay {
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    left:0;
    z-index:3;
    display:flex;
  }
  .loading-overlay-bg {
    width:100%;
    height:100%;
    background-color:rgb(32, 32, 32);
    opacity:100;
  }
  .loading-overlay-strip {
    position:absolute;
    width:100%;
    height:25%;
    top:50%;
    left:0;
    background-color:rgb(20, 20, 20);
  }
  /* animation for transition */
  .loading-overlay-manager-enter-active > .loading-overlay-bg, .loading-overlay-manager-leave-active > .loading-overlay-bg {
    transition-property:opacity;
    transition-duration:.25s;
  }
  .loading-overlay-manager-enter-active > .loading-overlay-bg {
    transition-delay:.25s;
  }
  .loading-overlay-manager-enter > .loading-overlay-bg, .loading-overlay-manager-leave-active > .loading-overlay-bg {
    opacity:0;
  }
</style>
