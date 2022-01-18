const github_btn = document.getElementById("github_btn");
const menu_button = document.getElementById("menu_btn");
const menu = document.getElementById("menu");
const menu_img = document.getElementById("menu_tab");
const main_page = document.getElementById("main_page");
const download_button = document.getElementById("download_btn");
const close_menu = document.getElementById("close_menu");
const body = document.getElementById("body");
const socials = document.getElementById("socials");
const accept_cookies = document.getElementById("accept_cookies");
const accept_button = document.getElementById("accept_button");

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let cookies_true_or_false = getCookie("cookies");

if (cookies_true_or_false == "True") {
    accept_cookies.style.visibility = "hidden";
}

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

accept_button.addEventListener("click",() => {
    accept_cookies.style.animation = "opacity_to_zero 0.4s ease-in-out 0s forwards";

    document.cookie = "cookies=True";

})
