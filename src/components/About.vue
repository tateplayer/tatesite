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
                    <p class="font-roboto-thin textsmall text-white">My name is Tate Player. I currently work as a Full-Stack Web Developer for a company named "MojiLife" in Lindon, Utah.</p>
                    <p class="font-roboto-thin textmedium text-white">WEB DEVELOPMENT</p>
                    <p class="font-roboto-thin textsmall text-white">I've worked in this position for about four years, since September 2016, and it was my entry into the professional world. Going into this job, I knew only the very basics of PHP/Development processes, but through dedication to my work I improved over time and got to where I am today.</p>
                    <p class="font-roboto-thin textsmall text-white">During my Web Development position, I've learned several different concepts, ranging from simple frontend applications to full-stack application communication and server setup. I also understand database management, migrating, and good database practices. I'm experienced in working in teams, but have lead most projects in this position as a solo developer. I typically work with those outside of the programming scope, e.x. designers, managers, feedback testers and UX teams.</p>
                    <p class="font-roboto-thin textmedium text-white">GAME DESIGN</p>
                    <p class="font-roboto-thin textsmall text-white">As a hobby and a way to spend my personal time, I like to work on game design projects. I typically lead these projects and create/evolve the ideas from start to finish, and sometimes work with teams of like-minded people to make them a reality. While Web Development has been a great learning experience for me, I some day hope to create videogame experiences, and help develop the worlds that players will be exploring. I like to create games that give players a sense of challenge and satisfaction, and lots of "Wow!" and "That was awesome!" moments that will keep them coming back to the experience.</p>
                    <p class="font-roboto-thin textsmall text-white">I very much work to make sure that the experience in my head matches what the player plays -- so I'll try my hardest to always step around, break through and surpass technical limitations that may stop me, which is a skill I learned from my modding experience with more limited engines. If the game doesn't wnat me to do it, I'll change the game's mind. To this day, I still work on modding projects and innovate in new ways including internal systems and changing how players play existing games.</p>
                    <p class="font-roboto-thin textsmall text-white">I've been modding as a hobby since I was about 15 years old. I initially started developing maps, but working in Source I learned about their amazing visual scripting logic tools, and eventually found myself becoming enthralled with developing how players would play and creating new types of interactions and elements.</p>
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
