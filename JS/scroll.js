let originalHeight = 0;
let originalWidth = 0;

const img = new Image();
img.onload = () => {
    originalHeight = img.height;
    originalWidth = img.width;
}
img.src = '/img/background.png';

$(window).scroll(() => {
    if (originalWidth === 0) return; // Проверка на деление на ноль

    const cssWidth = $("#background").width();
    const imgHeight = (cssWidth * originalHeight) / originalWidth;
  
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
  
    const scrollTop = $(this).scrollTop();
    const scrollPercent = scrollTop / (docHeight - windowHeight);
  
    const topPx = -scrollPercent * (imgHeight - windowHeight);

    $("#background").css("background-position", `center ${topPx}px`);
});