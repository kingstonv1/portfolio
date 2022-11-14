/* <div class="navbar">
        <div class="option" id="home" onclick="document.getElementById('top').scrollIntoView({behavior: 'smooth'});" >
            <h6>Home</h6>
        </div>
        
        <div class="option" id="aboutme" onclick="document.getElementById('introduction').scrollIntoView({behavior: 'smooth'});">
            <h6>About Me</h6>
        </div>

        <div class="option" id="projects" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'});">
            <h6>Projects</h6>
        </div>

        <div class="option" id="contact" onclick="//Put Something here once contact info is at bottom of page">
            <h6>Contact Me</h6>
        </div>

        <div class="icon" id="github" onclick="window.location = 'https:\/\/github.com/kingstonv1';">
            <img src="./assets/github.png" alt="Github Icon">
        </div>
    </div> */

document.getElementById('home').addEventListener(function () { document.getElementById('top').scrollIntoView({behavior: 'smooth'}); });
document.getElementById('aboutme').addEventListener(function () { document.getElementById('introcution').scrollIntoView({behavior: 'smooth'}); });
document.getElementById('projects').addEventListener(function () { document.getElementById('projs').scrollIntoView({behavior: 'smooth'}); });
//Change this to "Contact" later
document.getElementById('contact').addEventListener(function () { document.getElementById('top').scrollIntoView({behavior: 'smooth'}); });
