<template>
 <router-link :to="{ name: 'project-view', params: { name: name } }" tag="div" v-if="!hidden" class="project-list-item">
  <div class="project-list-item-inner">
   <div class="project-list-item-type">
    <img v-if="type === 'web'" src="/static/icons/world-grid.png"/>
    <img v-else-if="type === 'game'" src="/static/icons/console-controller.png"/>
   </div>
   <div class="project-list-item-logo">
     <img v-bind:src="projectdata._logoImage" />
   </div>
   <div class="project-list-item-bg" v-bind:style="projectdata.backgroundData">

   </div>
   <div class="project-list-item-label">
     <h2 v-resize-text="{ratio:'1.2', minFontSize:'16px', maxFontSize:'20px', delay:'100'}">{{ title }}</h2>
   </div>
  </div>
 </router-link>
</template>

<script>
import ResizeText from "vue-resize-text"

export default {
  directives: {
    ResizeText
  },
  props: {
    name: String,
    title: String,
    coverimage: String,
    logoimage: String,
    hidden: Boolean,
    type: {
      type: String,
      required: false
    }
  },
  data: function () {
    var logoimage
    var coverimage

    if (this.logoimage != null) {
      try {
        logoimage = require("@/assets/images/projects/logos/" + this.logoimage)
      } catch (e) {
        logoimage = require("@/assets/images/projects/logos/none.png")
      }
    } else {
      logoimage = require("@/assets/images/projects/logos/none.png")
    }

    if (this.coverimage != null) {
      try {
        coverimage = "url(" + require("@/assets/images/projects/covers/" + this.coverimage) + ")"
      } catch (e) {
        coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
      }
    } else {
      coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
    }

    return {
      projectdata: {
        backgroundData: {
          backgroundImage: coverimage
        },
        _logoImage: logoimage
      }
    }
  }
}
</script>

<style scoped>
  .project-list-item {
    position:relative;
    display:inline-block;
    width:250px;
    height:350px;
    margin-left:25px;
    margin-right:25px;
    margin-bottom:25px;
    max-width:100%;
  }
  .project-list-item-inner {
    position:absolute;
    top:0;
    left:0;
    background-color:white;
    width:100%;
    height:100%;
    cursor:pointer;
    transition:all 150ms ease-in;
    transition-property:transform;
    overflow:hidden;
  }
  .project-list-item-bg {
    position:absolute;
    width:102%;
    height:102%;
    background-position:center center;
    background-size:cover;
    background-repeat:no-repeat;
    transition:all 150ms ease-in;
    transition-property:filter, transform, background-size;
    transform:scale( 1.1 );
  }
  .project-list-item-inner:hover {
    transform:scale3d( 1.1, 1.1, 1 );
  }
  .project-list-item-inner:hover > .project-list-item-bg {
    filter:brightness( 0.5 );
  }
  .project-list-item-label {
    position: absolute;
    background-color:rgb(32, 32, 32);
    right: 0;
    bottom: 30px;
    width: 80%;
    height: 40px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    z-index:5;
  }
  .project-list-item-label h2 {
    font-family:"Roboto";
    font-weight:200;
    padding-right:10%;
    color:white;
    white-space: nowrap;
    font-size:20px;
  }
  .project-list-item-logo {
    display:flex;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:1;
    align-items:center;
    justify-content: center;
    transition:all 150ms ease-in;
    transition-property:transform;
  }
  .project-list-item-logo img {
    width:95%;
    object-fit:cover;
  }
  .project-list-item-inner:hover > .project-list-item-logo {
    transform:scale( 1.1 );
  }
  .project-list-item-type {
    position:absolute;
    background-color:rgb(32, 32, 32);
    width:20%;
    padding-top:20%;
    object-fit:cover;
    z-index:1;
  }
  .project-list-item-type > img {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate( -50%, -50% );
    width:75%;
  }
  @media only screen and ( max-width:720px )
  {
    .project-list-item {
      display:inline-block;
      width:70%;
    }
    .project-list-item-label {
      width:50%;
    }
  }

</style>
