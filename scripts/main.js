function isMobile() {
    // credit to Timothy Huang for this regex test: 
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        { return true }
    else 
        { return false }
}

if (isMobile()) {
    alert("This website wasn't developed with mobile devices in mind;\nThe page may not display properly on your device.")
}

//document.getElementById('home').addEventListener("click", function () { document.getElementById('top').scrollIntoView({behavior: 'smooth'}); });
document.getElementById('aboutme').addEventListener("click", function () { document.getElementById('top').scrollIntoView({ behavior: 'smooth' }); });
document.getElementById('projects').addEventListener("click", function () { document.getElementById('projs').scrollIntoView({ behavior: 'smooth' }); });
//Change this to "Contact" later
document.getElementById('contact').addEventListener("click", function () { document.getElementById('top').scrollIntoView({ behavior: 'smooth' }); });
