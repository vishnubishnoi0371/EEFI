document.getElementById("menuIcon").addEventListener("click", function () {
    document.querySelector(".nav-flip").classList.toggle("fix-lft");
});


const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});