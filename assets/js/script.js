
// animation and functions of contact menu aside
const popContact = document.getElementsByClassName("popContact")[0];
const popContactChild = document.getElementsByClassName("popContactChild");
const aside = document.querySelector("aside");

popContact.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from reaching window
    aside.classList.toggle('active');
    popContact.classList.toggle('bounce');
    for (let i = 0; i < popContactChild.length; i++) {
        popContactChild[i].classList.toggle('open');
    }
});
window.addEventListener("click", (event) => {
    if (!popContact.contains(event.target)) {
        aside.classList.remove('active');
        popContact.classList.remove('bounce');
        for (let i = 0; i < popContactChild.length; i++) {
            popContactChild[i].classList.remove('open');
        }
    }
});

// cursor animation
const home = document.getElementById("home");
home.addEventListener('mousemove', function (e) {
    //range size
    var arr = [0.2, 0.9, 0.8, 0.5, 0.2];
    arr.forEach(function (i) {

        var x = (1 - i) * 40;
        var star = document.createElement('div');

        // to determine range of creating area of the star
        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function () {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 1000));
    });
}, false);

// animation and functions of skills
const popLanguage = document.getElementsByClassName("popLanguage")[0];
const popLanguageChild = document.getElementsByClassName("popLanguageChild");

popLanguage.addEventListener("click", (event) => {
    for (let i = 0; i < popLanguageChild.length; i++) {
        popLanguageChild[i].classList.toggle('openChild');
    }
});
const popTools = document.getElementsByClassName("popTools")[0];
const popToolsChild = document.getElementsByClassName("popToolsChild");

popTools.addEventListener("click", (event) => {
    for (let i = 0; i < popToolsChild.length; i++) {
        popToolsChild[i].classList.toggle('openChild');
    }
});


//modify height of the wave in mode phone
const nav = document.querySelector('nav');
window.addEventListener("scroll", function () {
    if (window.innerWidth <= 680) {
        if (window.scrollY !== 0) {
            nav.style.height = "2rem";
        } else {
            nav.style.height = "4rem";
        }
    }


    const openLang = document.getElementById("openLang");
    const viewportOffsetLang = openLang.getBoundingClientRect();
    const openTools = document.getElementById("openTools");
    const viewportOffsetTools = openTools.getBoundingClientRect();

    if (viewportOffsetLang.top < (window.innerHeight - 100)){
        for (let i = 0; i < popLanguageChild.length; i++) {
            popLanguageChild[i].classList.add('openChild');
        }
    }
    if (viewportOffsetTools.top < (window.innerHeight - 100)){
        for (let i = 0; i < popToolsChild.length; i++) {
            popToolsChild[i].classList.add('openChild');
        }
    }

});

window.addEventListener("resize", function () {
    if (window.innerWidth > 680) {
        nav.style.height = "";
    }
});



