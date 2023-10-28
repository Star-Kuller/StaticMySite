gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.content',
    content: '.page-content',
    smooth: 1.5
})

let originalHeight = 0;
let originalWidth = 0;
let profile = document.querySelector('.profile');
let userRole = document.querySelector('.profile__role');
let userName = document.querySelector('.profile__username');

const img = new Image();
img.onload = () => {
    originalHeight = img.height;
    originalWidth = img.width;
}
img.src = '/img/background.png';

$(window).scroll(() => {
    if (originalWidth === 0) return;

    if (window.scrollY == 0) {
        profile.style.height = "12.5vh";
        profile.style.width = "22.5vw";
        profile.style.right = "calc(var(--index)*1)";
        profile.style.padding = "0 0.3vw";
        userRole.style.fontSize = "calc(var(--index)*0.75)";
        userRole.style.opacity = "1";
        userName.style.fontSize = "calc(var(--index)*1)";
    } else {
        profile.style.height = "10vh";
        profile.style.width = "15vw";
        profile.style.right = "calc(var(--index)*0.5)";
        profile.style.padding = "0";
        userRole.style.fontSize = "0";
        userRole.style.opacity = "0";
        userName.style.fontSize = "calc(var(--index)*0.75)";
    }

    const cssWidth = $("#background").width();
    const imgHeight = (cssWidth * originalHeight) / originalWidth;
  
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
  
    const scrollTop = $(this).scrollTop();
    const scrollPercent = scrollTop / (docHeight - windowHeight);
  
    const topPx = -scrollPercent * (imgHeight - windowHeight);

    $("#background").css("background-position", `center ${topPx}px`);
});

