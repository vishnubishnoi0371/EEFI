document.getElementById("menuIcon").addEventListener("click", function () {
    document.querySelector(".nav-flip").classList.toggle("fix-lft");
    document.querySelector("label[id='menuIcon']").classList.toggle("menu-open");
});
