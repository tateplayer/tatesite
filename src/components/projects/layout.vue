<template>
  <div class="wrapper">
    <div class="header">
        {{title}}
    </div>
    <div class="project" ref="container" :style="containerStyles">
      <div class="main">
        <div v-if="images.length > 0" @hook:mounted="setStep" class="carousel">
          <div class="carousel-focus-outer">
            <div class="carousel-focus">
              <img :src="images[0].value"/>
            </div>
          </div>
          <div class="carousel-selector">
            <div class="carousel-selector-inner">
              <button class="carousel-button start">&lt;</button>
              <div class="carousel-list" ref="list" :style="innerStyles">
                <div class="carousel-item" v-for="image in images" :key="image.value">
                  <img :src="image.value"/>
                </div>
              </div>
              <button class="carousel-button end" v-on:click="next">&gt;</button>
            </div>
          </div>
        </div>
        <div v-if="youtube" class="main-content-section">
          <p class="section-header">VIDEO</p>
          <div class="video">
            <iframe width="100%" :src="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="side">
        <div class="info">
          <div class="banner" :style="bannerStyle">
            <img :src="logoImage"/>
          </div>
          <div class="info-content">
            <label v-for="item in content" :key="item.title">
              <p class="section-header">{{item.title}}</p>
              <label v-if="item.type == 'default'">
              <p class="section-item" v-for="value in item.values" :key="value">
                {{value}}
              </p>
              </label>
              <label v-else-if="item.type == 'list'">
                <ul class="section-list">
                  <li v-for="value in item.values" :key="value">
                    {{value}}
                  </li>
                </ul>
              </label>
            </label>
          </div>
        </div>
        <div v-if="detail" class="info">
          <div class="info-content">
            <label v-for="(value, key) in detail" :key="key">
              <p class="detail">
                <span class="detail-label">{{key}}: </span>{{value}}
              </p>
            </label>
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

    this.title = selectedProject.title
    this.selectedProject = selectedProject
    var coverimage
    var logoimage

    if (selectedProject.coverimage != null) {
      try {
        coverimage = "url(" + require("@/assets/images/projects/covers/" + selectedProject.coverimage) + ")"
      } catch (e) {
        coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
      }
    } else {
      coverimage = "url(" + require("@/assets/images/projects/covers/default-cover.png") + ")"
    }

    if (selectedProject.logoimage != null) {
      try {
        logoimage = require("@/assets/images/projects/logos/" + selectedProject.logoimage)
      } catch (e) {
        logoimage = require("@/assets/images/projects/logos/none.png")
      }
    } else {
      logoimage = require("@/assets/images/projects/logos/none.png")
    }

    this.bannerStyle = { backgroundImage: coverimage }
    this.logoImage = logoimage
  },
  mounted () {
    this.content = this.selectedProject.content || undefined
    this.images = this.selectedProject.images || undefined
    this.detail = this.selectedProject.detail || undefined
    this.youtube = this.selectedProject.youtube || undefined

    setTimeout(() => {
      this.containerStyles = {"transform": "translateY(0%)", "opacity": 100}
    }, 250)
  },
  methods: {
    setStep () {
      const width = this.$refs.list.scrollWidth
      const total = this.images.length
      this.step = `${width / total}px`
    },

    next () {
      if (!this.step) {
        this.setStep()
      }

      if (this.transitioning) return
      this.update()

      this.transitioning = true
      this.afterTransition(() => {
        const image = this.images.shift()
        this.images.push(image)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    update () {
      this.innerStyles = {
        transform: `translateX(-${this.step})`
      }
    },

    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.list.removeEventListener("transitionend", listener)
      }
      this.$refs.list.addEventListener("transitionend", listener)
    },

    resetTranslate () {
      this.innerStyles = {
        transition: "none",
        transform: "translateX(0)"
      }
    }
  },
  data () {
    return {
      selectedProject: undefined,
      bannerStyle: { backgroundImage: "" },
      containerStyles: {
        "transform": "translateY(-10%)",
        "opacity": 0
      },
      logoImage: "",
      title: undefined,
      images: {},
      content: {},
      detail: {},
      youtube: undefined,
      step: '',
      innerStyles: {},
      transitioning: false
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display:flex;
    flex-direction: column;
    width:100%;
    height:auto;
    align-items: center;
  }
  .project {
    display:flex;
    flex-wrap:wrap;
    width:1200px;
    background-color:rgb( 32, 32, 32 );
    box-shadow:0px 0px 5px 2px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to left, rgb(0 0 0 / 10%) 5%, rgb(0 0 0 / 0%) 50%, rgb(0 0 0 / 10%) 95%) no-repeat;
    transition:transform ease-in-out 500ms, opacity ease-in-out 500ms
  }
  .header {
    font-family:"Roboto";
    color:white;
    text-align:center;
    padding:30px;
    font-size:48px;
    flex: 0 0 100%;
    width:100%;
    font-weight:200;
    box-sizing: border-box;
  }
  .main {
    flex: 0 0 auto;
    width:65%;
  }

  .carousel {
    display:flex;
    flex-direction: column;
  }

  .carousel-focus-outer {
    width:100%;
    padding:5px;
    box-sizing: border-box;
  }
  .carousel-focus {
    position:relative;
    box-sizing: border-box;
    width:100%;
    padding-top:56.25%;
  }

  .carousel-focus > img {
    position:absolute;
    top:0;
    left:0;
    width:100%;
  }
  .carousel-selector {
    width:100%;
    box-sizing: border-box;
    padding:5px;
  }

  .carousel-selector-inner {
    position:relative;
    display:inline-block;
    width:100%;
    height:auto;
    overflow-x:hidden;
    white-space:nowrap;
  }
  .carousel-list {
    display:inline-block;
    top:0;
    left:0;
    height:auto;
    transition: transform 0.2s;
  }
  .carousel-item {
    display:inline-block;
    box-sizing:border-box;
    position:relative;
    width:200px;
    margin-right:5px;
    height:calc(200px * .5625);
  }
  .carousel-item > img {
    position:absolute;
    top:0;
    left:0;
    width:100%;
  }

  .side {
    display:flex;
    flex: 0 0 auto;
    width:35%;
    flex-direction: column;
  }
  .info {
    width:100%;
    padding:5px;
    padding-left:0;
    box-sizing: border-box;
    background: linear-gradient(to top, rgba(0 0 0 / 50%), rgba(0 0 0 / 20%)) no-repeat;
    background-origin: content-box;
  }

  .banner {
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:175px;
    background-position:center;
    overflow:hidden;
  }

  .banner > img {
    height: 90%;
  }

  .section-header {
    font-size:16px;
    color:white;
    font-family:"Roboto";
    width:100%;
    padding-bottom:4px;
    margin:6px 0;
    background: linear-gradient(to right, white 0%, transparent 100%) left bottom no-repeat;
    background-size: 100% 1px;
  }

  .section-item {
    font-size:14px;
    color:rgb(185, 185, 185);
    font-family:"Roboto";
    line-height: 1.55em;
  }

  .section-list {
    padding:0;
    padding-left:20px;
    margin:0;
    list-style-type:square;
  }

  .section-list > li {
    color:rgb(185, 185, 185);
    font-family:"Roboto";
    font-size:14px;
    padding-bottom:5px;
    line-height:1.55em;
  }

  .info-content {
    padding:10px;
    box-sizing:border-box;
  }

  .main-content-section {
    padding:5px;
  }

  .detail {
    font-family:"Roboto";
    font-size:14px;
    color: rgb(185, 185, 185);
    margin: 10px 0;
  }

  .detail-label {
    font-size:12px;
    text-transform:uppercase;
    color: rgb(136, 136, 136);
  }

  .video {
    position:relative;
    width:100%;
    padding-top:56.25%;
  }

  .video > iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }

  .carousel-button {
    position:absolute;
    top:0;
    width:40px;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    z-index:2;
    background:none;
    font-family:"Roboto";
    font-size:48px;
    font-weight:200;
    border:0;
  }
  .carousel-button.start {
    left:0;
    background:linear-gradient(to left, rgba(0 0 0 / 0%), rgba(0 0 0 / 100%));
  }

  .carousel-button.end {
    right:0;
    background:linear-gradient(to right, rgba(0 0 0 / 0%), rgba(0 0 0 / 100%));
  }
</style>
