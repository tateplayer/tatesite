<template>
    <div class="sectional">
        <div class="section-standalone">
            <div class="horiz-left">
                <div class="portrait-main-container">
                    <img src="/static/about/tate-headshot-nov302022.jpg" />
                </div>
            </div>
            <div class="horiz-right">
                <h3 class="font-roboto-thin texttitle text-white">ABOUT ME</h3>
                <p class="font-roboto-thin textsmallmed text-white">My name is Tate Player. I'm a Gameplay & Technical Designer in Salt Lake City, Utah.</p>
                <p class="font-roboto-thin textsmallmed text-white">I love to build systems for games that are fun to interact with on the player-side, and easy to work with on the developer side.
                    I consider it important to make a system that the player engages with very comprehensive and fun to use, while also providing system scalability for design expansion over time.
                    Both of these are key to making your game stand out against the rest -- and these are things I'm very experienced in!</p>
                <p class="font-roboto-thin textsmallmed text-white">I am always open to learning any part of designing games, and am more than happy to pick up new tools when I need to to get the job done.
                    This has gives me opportunities to rapidly prototype games & systems to reach a "proof-of-concept" stage before assembling teams to work on projects.
                </p>
                <p class="font-roboto-thin textsmallmed text-white">
                    In my own time I like to work on personal projects at home, a large majority of them being video game related projects, but others being things like digital art and working on my car!
                </p>
                <p class="font-roboto-thin textsmallmed text-white">
                    Professionally, I've worked in the web development field for 5 years in various Front and Back-end Engineering positions.
                </p>
                <p class="font-roboto-thin textmedium text-white">
                    Language Proficiencies:
                </p>
                <ul>
                    <li>C#</li>
                    <li>GSC</li>
                    <li>Lua</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Svelte</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SQL</li>
                    <li>Python</li>
                </ul>
                <p class="font-roboto-thin textmedium text-white">
                    Tool Proficiencies:
                </p>
                <ul>
                    <li>Unity</li>
                    <li>Visual Studio Code</li>
                    <li>Radiant Level Editor</li>
                    <li>Svelte</li>
                    <li>MySQL</li>
                    <li>SQLite3</li>
                    <li>Photoshop</li>
                    <li>Hammer Editor</li>
                    <li>Blender</li>
                    <li>Git</li>
                    <li>Npm</li>
                </ul>
            </div>
            <div class="about-links-container">
                <a href="/static/about/tateplayer-resume.pdf"><button class="about-link-button">Resume Document</button></a>
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
    ul {
        list-style-type: none;
        margin:0;
        padding:0;
    }

    li {
        display:inline-block;
        border:1px solid white;
        padding:10px;
        color:white;
        font-size:14px;
        margin-right:5px;
        font-family:"Roboto";
    }
    .horiz-left {
        vertical-align:top;
        display:inline-block;
        width:20%;
        box-sizing:border-box;
        padding-left:20px;
    }
    .horiz-right {
        box-sizing: border-box;
        vertical-align:top;
        display:inline-block;
        width:80%;
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
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
