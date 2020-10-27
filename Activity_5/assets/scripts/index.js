const goToHome = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const scrollOffset = 100;

let registerButton = document.getElementById("register-btn");
let loginButton = document.getElementById("login-btn");
let backToTopButton = document.getElementById("back-to-home");
let navBrandButton = document.getElementById("nav-brand");

registerButton.addEventListener("click",  () => {
    window.location.replace("../../pages/register/register.html")

});
loginButton.addEventListener("click", () => {
    window.location.replace("../../pages/login/login.html")
})

backToTopButton.addEventListener("click", goToHome)
navBrandButton.addEventListener('click', goToHome)

// Listen to scroll
window.onscroll = () => {
    if(document.body.scrollTop > scrollOffset || document.documentElement.scrollTop > scrollOffset){
        backToTopButton.style.transform = "scale(1)";
    } else {
        backToTopButton.style.transform = "scale(0)";
    }
}

