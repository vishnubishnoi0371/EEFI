// document.getElementById("menuIcon").addEventListener("click", function () {
//     document.querySelector(".nav-flip").classList.toggle("fix-lft");
//     document.querySelector("label[id='menuIcon']").classList.toggle("menu-open");
// });

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
