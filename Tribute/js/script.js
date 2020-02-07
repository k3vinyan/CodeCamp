const fixPosition = function(divName) {
    const bruceleeImage = document.getElementById('brucelee-image')
    const windowWidth = window.screen.width
    
    if((bruceleeImage.width*1.4) > windowWidth && (divName === "about" || divName === "timeline")) {
        bruceleeImage.style.animation = "moveBruceForward linear .1s 1 forwards"
    } else {
        bruceleeImage.style.animation = "moveBruceBack linear .1s 1 forwards"
    }

}
