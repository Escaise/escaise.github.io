let github_btn = document.getElementById("github_btn");
let menu_button = document.getElementById("menu_btn");
let menu = document.getElementById("menu");
let menu_img = document.getElementById("menu_tab");
let main_page = document.getElementById("main_page");
let download_button = document.getElementById("download_btn");
let close_menu = document.getElementById("close_menu");
let body = document.getElementById("body");
let socials = document.getElementById("socials");

github_btn.addEventListener("click", () => {
    window.open("https://www.github.com/Rabixx","_blank");
})

function onMenuOpen() {
    menu.style.visibility = "visible";
    menu.style.animation = "blur_menu 0.5s ease-in-out 0s forwards,slide_menu 0.6s both"
    menu_img.style.animation = "blur 0.2s ease-in-out 0s forwards"
    socials.style.animation = "blur 0.2s ease-in-out 0s forwards"
    main_page.style.animation = "blur 0.2s ease-in-out 0s forwards"
}

menu_button.addEventListener("click", () => {
    onMenuOpen();
})

function onMenuClosed() {
    menu.style.animation = "opacity_to_zero 0.4s ease-in-out 0s forwards"
    main_page.style.animation = "unblur 0.5s ease-in-out 0s both"
    socials.style.animation = "unblur 0.5s ease-in-out 0s forwards"
    menu_img.style.animation = "unblur 0.5s ease-in-out 0s forwards"
}

close_menu.addEventListener("click", () => {
    onMenuClosed();
})