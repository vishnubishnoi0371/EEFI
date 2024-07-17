
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
    });
});
$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});

document.getElementById("menuIcon").addEventListener("click", function () {
    this.classList.toggle("crossline1");
    document.querySelector(".nav_bar").classList.toggle("left_false");
    document.querySelector(".nav_bar").classList.toggle("left_true");
    document.querySelector(".nav_bar").classList.toggle("d-none");
});

document.querySelectorAll(".nav_bar li").forEach(function (li) {
    li.addEventListener("click", function () {
        document.getElementById("menuIcon").classList.toggle("crossline1");
        document.querySelector(".nav_bar").classList.toggle("left_false");
        document.querySelector(".nav_bar").classList.toggle("left_true");
        document.querySelector(".nav_bar").classList.toggle("d-none");
    });
});