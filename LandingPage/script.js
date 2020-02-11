const button = document.querySelector('.nav-button');

let bool = false

button.onclick = function() {
    const listing = document.querySelector('.nav-listing')
    const nav = document.querySelector('nav')
    const mainHeading= document.querySelector('.main-heading')
    const signupForm = document.querySelector('.signup')

    if(bool) {
        listing.style.animation = "navAmination-hide"
        listing.style.animationDuration = "1s"
        listing.style.animationFillMode = "forwards"
        nav.style.height = ""

        mainHeading.style.animation = "fadeIn"
        mainHeading.style.animationDuration = "1s"
        mainHeading.style.animationFillMode = "forwards"

        signupForm.style.animation = "fadeIn"
        signupForm.style.animationDuration = "1s"
        signupForm.style.animationFillMode = "forwards"

        bool = !bool
    } else {
        nav.style.height = "100%"
        listing.style.animation = "navAmination-show"
        listing.style.animationDuration = "1s";
        listing.style.animationFillMode = "forwards"

        mainHeading.style.animation = "fadeOut"
        mainHeading.style.animationDuration = "1s"
        mainHeading.style.animationFillMode = "forwards"

        signupForm.style.animation = "fadeOut"
        signupForm.style.animationDuration = "1s"
        signupForm.style.animationFillMode = "forwards"

        bool = !bool
    }

}







// document.addEventListener("DOMContentLoaded", function() {
//     // code...
//   });