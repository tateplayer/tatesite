<template>
  <div class="home-wrapper">
    <div class="home-info-column">
      <div class="home-info-box" v-bind:style="homeBoxStyles">
        <div>
          <h2 class="font-roboto-thin text-white home-info-name">
            TATE PLAYER
          </h2>
        </div>
        <div>
          <h2 class="font-roboto-thin text-white home-info-job-titles">
            Full-Stack Web Developer // Gameplay Designer // Systems Designer
          </h2>
        </div>
        <div class="home-info-divider"></div>
        <div>
          <h2 class="font-roboto-thin text-white home-info-location">
            Layton, Utah
          </h2>
        </div>
        <div class="home-info-button-container">
          <router-link :to="{ name: 'projects' }" tag="button" class="home-info-button">
            View My Portfolio
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      homeBoxStyles: {
        'transform': 'translateY( -10% )',
        'opacity': 0
      }
    }
  },
  mounted: function () {
    setTimeout(() => (this.homeBoxStyles = { 'transform': 'translateY( 0% )', 'opacity': 100 }), 250)
  }
}
</script>

<style>
  .font-roboto-thin {
    font-family:"Roboto";
    font-weight:200;
  }
  .text-white {
    color:white;
  }

  .home-wrapper {
    width:100%;
    height:100vh;
    background-image:url("/static/homepage-bg.png");
    background-size:cover;
    background-position:center center;
  }
  .home-info-column {
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
    height:100%;
  }
  .home-info-box {
    width:80%;
    height:40%;
    /*background-color:rgb(32, 32, 32);*/
    opacity:0;
    transform:translateY( -10% );
    transition:all 750ms ease-out;
    transition-property: opacity, transform;
    align-items:center;
  }
  .home-info-name {
    font-size:64px;
    text-shadow:2px 2px rgba( 0, 0, 0, 0.5 );
    text-align:center;
  }
  .home-info-job-titles {
    font-size:36px;
    text-shadow:2px 2px rgba( 0, 0, 0, 0.5 );
    text-align:center;
  }
  .home-info-location {
    font-size:32px;
    text-shadow:2px 2px rgba( 0, 0, 0, 0.5 );
    text-align:center;
  }
  .home-info-divider {
    width:100%;
    height:1px;
    background-color:white;
    box-shadow:2px 2px 1px 1px rgba(0, 0, 0, 0.5);
    margin-top:10px;
    margin-bottom:10px;
  }
  .home-info-button-container {
    text-align:center;
    width:100%;
    padding-top:20px;
    padding-bottom:20px;
  }
  .home-info-button {
    border:0;
    background-color:rgb(20, 20, 20);
    color:white;
    font-family:"Roboto";
    font-weight:200;
    font-size:24px;
    padding:20px;
    background: linear-gradient( to bottom, rgb( 32, 32, 32 ) 50%, white 50%);
    background-size:100% 200%;
    background-position:left top;
    transition:all 500ms ease;
    transition-property:background-position, color;
    cursor:pointer;
  }
  .home-info-button:hover {
    color:rgb(32, 32, 32);
    background-position:left bottom;
  }
</style>
