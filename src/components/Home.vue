<template>
  <div class="wrapper">
    <div class="column">
      <p class="title">
        DEMO REEL
      </p>
      <div class="video" v-bind:style="homeBoxStyles">
        <iframe class="iframe" src="https://player.vimeo.com/video/779402990?h=0e7d76cc5e" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
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

<style scoped>
  .wrapper {
    display:flex;
    justify-content: center;
    position:relative;
    width:100%;
    height:calc(100vh - 116px);
  }

  .title {
    text-align:center;
    width:100%;
    font-family:"Roboto";
    font-weight:200;
    color:white;
    font-size:42px;
    text-decoration: none;
  }
  .column {
    width:70%;
    height:100%;
  }

  .video {
    position:relative;
    width:100%;
    padding-top: 56.25%;
    transition:opacity 500ms ease-in-out, transform 500ms ease-in-out;
    box-shadow: 0px 5px 15px black;
  }

  .iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>
