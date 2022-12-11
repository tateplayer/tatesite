<template>
    <div class="sectional">
        <div class="section-standalone" style="padding-top:30px;padding-bottom:30px;">
            <div class="section-container">
                <h3 class="font-roboto-thin texttitle text-white">CONTACT</h3>
                <p class="contact-paragraph-spaced">Want me to design systems, action-to-action gameplay or implement your beautiful UI design? Let's chat! You can reach out to me at <a href="mailto:contact@tateplayer.codes">contact@tateplayer.codes</a>.</p>
                <ul class="contact-paragraph-spaced font-roboto-thin textsmall text-white contact-list">
                    <li><a class="link-white textmedium" href="https://www.linkedin.com/in/kameron-player-ab2010147/"><button class="contact-link-button">LinkedIn</button></a></li>
                </ul>
                <p class="contact-paragraph-spaced"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
    .contact-list {
        list-style-type:none;
    }
    .contact-list > li {
        margin-top:20px;
        display:inline-block;
    }
    .contact-paragraph-spaced {
        margin-top:10px;
        margin-bottom:20px;
        text-indent:0%;
    }
    .contact-link-button {
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
    }
    .contact-link-button:hover {
        color:rgb(32, 32, 32);
        background-position:left bottom;
    }
</style>
