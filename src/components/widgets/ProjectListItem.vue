<template>
 <router-link :to="{ name: 'project-view', params: { name: project.name } }" tag="div" v-if="!project.hidden" class="project-list-item">
  <div class="project-list-item-inner">
   <div class="project-list-item-type">
    <img v-if="project.type === 'web'" src="/static/icons/world-grid.png"/>
    <img v-else-if="project.type === 'game'" src="/static/icons/console-controller.png"/>
   </div>
   <div class="project-list-item-logo">
     <img v-bind:src="logoImage" />
   </div>
   <div class="project-list-item-bg" :style="{backgroundImage: coverImage}">

   </div>
   <div class="project-list-item-label">
      <div class="project-list-item-label-name">
        <h2 v-resize-text="{ratio:'1.2', minFontSize:'16px', maxFontSize:'20px', delay:'100'}">{{ project.title }}</h2>
      </div>
      <div v-if="project.launchdate" class="project-list-item-label-date">
        <h2 v-resize-text="{ratio:'1.2', minFontSize:'14px', maxFontSize:'18px', delay:'100'}">{{ project.launchdate }}</h2>
      </div>
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
    project: Object
  },
  data: function () {
    var logoImage
    var coverImage
    if (this.project.logoimage != null) {
      try {
        logoImage = require("@/assets/images/projects/logos/" + this.project.logoimage)
      } catch (e) {
        logoImage = require("@/assets/images/projects/logos/none.png")
      }
    } else {
      logoImage = require("@/assets/images/projects/logos/none.png")
    }

    if (this.project.coverimage != null) {
      try {
        coverImage = "url(" + require("@/assets/images/projects/covers/" + this.project.coverimage) + ")"
      } catch (e) {
        coverImage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
      }
    } else {
      coverImage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
    }

    return {
      logoImage,
      coverImage
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
    height: auto;
    z-index:2;
    text-align:right;
  }
  .project-list-item-label-name {
    padding-top:5px;
    padding-bottom:5px;
  }
  .project-list-item-label h2 {
    font-family:"Roboto";
    font-weight:200;
    padding-right:5%;
    color:white;
    white-space: nowrap;
    font-size:auto;
    width:95%;
  }
  .project-list-item-label-date {
    padding-top:5px;
    padding-bottom:5px;
    background-color:rgb(20, 20, 20);
  }
  .project-list-item-label-date > h2 {
    color:white;
    font-weight:300;
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
      width:80%;
    }
  }

</style>
