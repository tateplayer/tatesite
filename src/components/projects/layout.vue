<template>
  <div class="sectional">
    <div class="project-column">
      <div class="project-header" v-bind:style="backgroundData">

      </div>
      <div class="project-title-wrapper">
        <div class="project-title-wrapper-inner">
          <h2 class="main-navigation-title">{{ project_details.title }}</h2>
        </div>
        <!--<div class="project-title-underline"></div>-->
      </div>
      <div class="project-section" v-for="content in project_details.content" v-bind:key="content.title">
        <div class="section-title">
          <div class="section-title-inner">
            <h2 class="main-navigation-title">{{ content.title }}</h2>
          </div>
        </div>
        <div v-for="(value, index) in content.values" v-bind:key="index" class="section-text-container">
          <p v-if="value.type === 'text'">{{ value.value }}</p>
          <div v-else-if="value.type == 'image'" class="section-project-image">
            <img :src="value.value"/>
            <div class="image-comment">
              {{ value.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectListData from "@/assets/data/project-list.json"

export default {
  name: "ProjectLayout",
  created () {
    var keys = Object.keys(projectListData)
    var selectedProject

    for (var i = 0; i < keys.length; i++) {
      for (var k = 0; k < projectListData[keys[i]].length; k++) {
        var checkName = projectListData[keys[i]][k].name

        if (checkName === this.$route.params.name) {
          selectedProject = projectListData[keys[i]][k]
        }
      }
    }

    this.project_details = selectedProject
  },
  mounted () {
    var coverimage
    if (this.project_details.coverimage != null) {
      try {
        coverimage = "url(" + require("@/assets/images/projects/covers/" + this.project_details.coverimage) + ")"
      } catch (e) {
        coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
      }
    } else {
      coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
    }

    this.backgroundData = { backgroundImage: coverimage }

    if (this.project_details.content == null) {
      this.project_details.content = []
    }
  },
  data () {
    return {
      backgroundData: { backgroundImage: "" },
      project_details: {}
    }
  }
}
</script>

<style scoped>
  .project-header {
    width:100%;
    height:300px;
    background-position:center center;
    background-size:cover;
    background-repeat:no-repeat;
  }
  .project-column {
    width:80%;
    margin:0 auto;
    background-color:rgb( 32, 32, 32 );
    min-height:100vh;
    box-shadow:0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  }
  .project-title-wrapper {
    width:100%;
    text-align:center;
    background-color:rgb( 10, 10, 10 );
  }
  .project-title-wrapper-inner {
    padding-top:15px;
    padding-bottom:15px;
  }
  .project-title-underline
  {
    margin:0 auto;
    width:70%;
    border-top:1px solid white;
  }
  .project-section {
    position:relative;
    padding-top:50px;
    /*padding-bottom:50px;*/
    width:100%;
  }
  .section-title {
    position:relative;
    padding-top:60px;
    margin-bottom:50px;
  }
  .section-title-inner {
    display:flex;
    position:absolute;
    top:0;
    left:-30px;
    height:100%;
    padding-left:30px;
    background-color:rgb( 10, 10, 10 );
    align-items:center;
    width:50%;
  }
  .section-text-container {
    width:80%;
    margin:0 auto;
  }
  .section-text-container > p {
    font-family:"Roboto";
    font-weight:200;
    font-size:18px;
    color:white;
    text-indent:5%;
    margin:0;
    padding-top:10px;
    padding-bottom:10px;
  }
  .section-project-image {
    font-size:0;
    background-color:rgb(10, 10, 10);
    box-shadow:0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  }
  .section-project-image > img {
    width:100%;
  }
  .section-project-image > .image-comment {
    text-align:center;
    font-family:"Roboto";
    font-weight:200;
    font-size:16px;
    width:100%;
    padding-top:15px;
    padding-bottom:15px;
    color:white;
  }
  @media only screen and ( max-width:720px )
  {
    .project-column {
      margin:0;
      width:100%;
    }
    .section-title-inner {
      width:100%;
    }
  }

</style>