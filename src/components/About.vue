<template>
    <div class="sectional">
        <div class="section-standalone">
            <div class="horiz-3070-left">
                <div class="portrait-main-container">
                    <img src="/static/about/tate-headshot-june62020.jpg" />
                </div>
            </div>
            <div class="horiz-3070-right">
                <div style="padding:20px">
                    <h3 class="font-roboto-thin texttitle text-white">TATE PLAYER</h3>
                    <p class="font-roboto-thin textsmall text-white">My name is Tate Player. I currently work as a Full-Stack Web Developer for "MojiLife" in Lindon, Utah.</p>
                    <p class="font-roboto-thin textmedium text-white">WEB DEVELOPMENT</p>
                    <p class="font-roboto-thin textsmall text-white">I've worked in this position for four years, since September 2016, and it was my entry into the professional world. Initially, I only had experience in the basics of PHP and code development processes, but through a desire for self-improvement I strengthened my knowledge and created more efficient, clean projects over time. I have also learned to refactor old and depreacated code where necessary.</p>
                    <p class="font-roboto-thin textsmall text-white">During my Web Development position, I've learned several different concepts, including simple frontend applications, full-stack application communication, server setup, database management, and migrating. I have experienced working in teams, but have lead most projects in this position as a solo developer. I typically work with those outside of the programming scope, e.x. designers, managers, feedback testers and UX teams.</p>
                    <p class="font-roboto-thin textmedium text-white">GAME DESIGN</p>
                    <p class="font-roboto-thin textsmall text-white">I've been modding videogames for eight years. Initially, I started developing maps in the source engine and later learned about their amazing visual scripting logic tools. Eventually, I found myself becoming enthralled with developing how players would play and creating new types of interactions and elements. This lead me to start new types of projects that would explore game design concepts.</p>
                    <p class="font-roboto-thin textsmall text-white">I typically lead these projects and create/evolve the ideas from start to finish, and sometimes work with teams of like-minded people to make them a reality. While Web Development has been a great learning experience for me, I some day hope to create videogame experiences, and help develop the worlds that players will be exploring. I like to create games that give players a sense of challenge and satisfaction, and lots of "Wow!" and "That was awesome!" moments that will keep them coming back to the experience.</p>
                    <p class="font-roboto-thin textsmall text-white">I very much work to make sure that the experience in my head matches what the player plays -- so I'll try my hardest to always step around, break through and surpass technical limitations that may stop me, which is a skill I learned from my modding experience with more limited engines. If the game doesn't want me to do it, I'll change the game's mind. To this day, I still work on modding projects and innovate in new ways including internal systems and changing how players play existing games.</p>
                </div>
            </div>
            <div class="about-links-container">
                <a href="/static/about/tateplayer-resume-2020.pdf"><button class="about-link-button">Resume Document</button></a>
                <router-link to="/projects" tag="button" class="about-link-button">Portfolio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
    .horiz-3070-left {
        vertical-align:top;
        display:inline-block;
        width:30%;
    }
    .horiz-3070-right {
        vertical-align:top;
        display:inline-block;
        width:70%;
    }
    .portrait-main-container {
        padding:5%;
    }
    .portrait-main-container img {
        border-radius:50%;
        overflow:hidden;
        width:100%;
    }
    .about-links-container {
        width:100%;
        padding:20px;
        text-align:center;
    }
    .about-link-button {
        border:0;
        background-color:rgb(20, 20, 20);
        color:white;
        font-family:"Roboto";
        font-weight:200;
        font-size:24px;
        padding:20px;
        background: linear-gradient( to bottom, rgb( 10, 10, 10 ) 50%, white 50%);
        background-size:100% 200%;
        background-position:left top;
        transition:all 500ms ease;
        transition-property:background-position, color;
        cursor:pointer;
        margin-right:5px;
        margin-left:5px;
    }
    .about-link-button:hover {
        color:rgb(32, 32, 32);
        background-position:left bottom;
    }
    @media only screen and (max-width:900px)
    {
        .section-standalone {
            width:100%;
        }
        .horiz-3070-left {
            width:100%;
            display:block;
        }
        .horiz-3070-right {
            width:100%;
            display:block;
        }
    }
</style>
