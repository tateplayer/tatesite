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
                Demo Reel
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
    <div class="nav-padding"></div>
    <transition name="loader-fade">
      <router-view/>
    </transition>
    <div id="footer">
      <p class="font-roboto-thin text-white">&#169;Tate Player 2022.</p>
      <p class="font-roboto-thin text-white">All trademarked content is property of their original owners.</p>
    </div>
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
      if (this.$route.name !== "home" && this.$route.name !== "about") {
        this.navTitleStyle.opacity = 100
        this.navTitleStyle.maxWidth = "300px"
      } else {
        this.navTitleStyle.opacity = 0
        this.navTitleStyle.maxWidth = "0px"
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
  #footer {
    text-align:center;
    padding:10px;
  }
  #footer > p {
    padding:5px;
    margin:0;
  }

  /*
    NAVIGATION
  */

  .main-navigation {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:116px;
    background-color:rgb( 32, 32, 32 );
    z-index:10;
    box-shadow:0 0 10px 5px rgba(0, 0, 0, 0.25);
  }

  .main-navigation-buffer {
    width:100%;
    height:116px;
  }

  .main-navigation-inner {
    height:100%;
  }

  .main-navigation-wrapper {
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-left:50px;
    padding-right:50px;
  }

  .main-navigation-title {
    font-family:"Roboto";
    font-weight:200;
    color:white;
    font-size:42px;
    text-decoration: none;
  }

  .main-navigation-separator {
    width:0;
    height:50%;
    border-left:1px white solid;
    border-right:1px white solid;
    margin-left:10px;
    margin-right:10px;
  }

  #main-navigation-list-outer {
    height:50%;
  }

  #main-nav-list {
    list-style-type: none;
    margin:0;
    padding:0;
    overflow:hidden;
    height:100%;
    display:flex;
    align-items:center;
  }

  #main-nav-list > li {
    display:flex;
    align-items: center;
    font-family:"Roboto";
    color:white;
    font-weight:200;
    font-size:18px;
    float:left;
    padding:5px;
    height:100%;
    background: linear-gradient( to bottom, rgb( 32, 32, 32 ) 50%, white 50%);
    background-size:100% 200%;
    background-position:left top;
    transition:all 500ms ease;
    transition-property:background-position, color;
    cursor:pointer;
  }

  #main-nav-list > li > a {
    display:block;
    color:inherit;
    text-decoration: none;
  }

  #main-nav-list > li:hover {
    background-position:left bottom;
    color:rgb( 32, 32, 32 )
  }

  #main-nav-list > li:hover > a {
    transition:color 500ms ease;
    color:rgb( 32, 32, 32 );
  }

  #main-nav-name {
    transition:all 750ms linear;
    transition-property:opacity, max-width;
    overflow:hidden;
    width:auto;
    white-space:nowrap;
  }

  .nav-padding {
    margin-top:116px;
  }
</style>
