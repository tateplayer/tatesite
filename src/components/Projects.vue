<template>
  <div class="sectional">
    <div class="project-list-section">
      <div class="project-list-label">
        <div v-resize-text="{ratio:'1.2', minFontSize:'16px', maxFontSize:'28px', delay:'100'}" class="project-list-label-title">
          PORTFOLIO & PROJECTS
        </div>
        <div class="project-list-label-chaser">
          <div>
          </div>
        </div>
      </div>
      <div class="project-list">
        <projectListItem v-for="project in projects" v-bind:key="project.name" v-bind="project"></projectListItem>
      </div>
    </div>
  </div>
</template>

<script>
import projectListData from "@/assets/data/project-list.json"
import projectListItem from "./widgets/ProjectListItem.vue"
import ResizeText from "vue-resize-text"

export default {
  name: "Projects",
  components: {
    projectListItem
  },
  directives: {
    ResizeText
  },
  data: function () {
    return {
      projects: projectListData.projects
    }
  },
  mounted: function () {
  }
}

</script>

<style>
  .project-list-section {
    width:100%;
  }
  .project-list-label {
    width:100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding-top:25px;
    padding-bottom:25px;
  }
  .project-list-label-title {
    color:white;
    font-size:28px;
    font-family:"Roboto";
    font-weight:200;
    width:auto;
  }
  .project-list-label-chaser {
    width:75%;
    padding-left:5%;
  }
  .project-list-label-chaser > div {
    width:100%;
    border-top:1px solid white;
  }
  @media only screen and ( max-width:720px )
  {
    .project-list {
      text-align:center;
    }
    .project-list-label-chaser {
      display:none;
    }
    .project-list-label-title {
      text-align:center;
      width:100%;
      font-size:38px;
    }
  }
</style>
