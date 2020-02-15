const ELEMENTS = {
    BODY: document.querySelector('body'),
    ASIDE: {
        BUTTON: document.querySelector('.aside-bar-button'),
        BAR: document.querySelector('.asidebar'),
        LINKS: document.querySelectorAll('.aside-link')
    }
}


function hideAsideOnClick() {
    const links = ELEMENTS.ASIDE.LINKS;
    const bar = ELEMENTS.ASIDE.BAR;
    for(let i = 0; i < links.length; i++) {
    
        links[i].onclick = function() {
            bar.style.display = "none"
        }
    }
}

function showAsideOnClick() {
    for(let i = 0; i < asideLinks.length; i++) {
        asideLinks[i].onclick = function() {
            return;
        }
    }
}

ELEMENTS.ASIDE.BUTTON.onclick = function() {
    const aside = document.querySelector('.asidebar')

    if(aside.style.display === "none") {
        aside.style.display = "flex"
    } else {
        aside.style.display = "none"
    }
}

let scriptVar = {
    asidebar: {
        hide: true
    }
}



ELEMENTS.BODY.onresize = function() {
    if(body.clientWidth > 600) {
        scriptVar.asidebar = true;
    } else {
        scriptVar.asidebar = false;
    }

    if(scriptVar.asidebar) {
        showAsideOnClick()
    } else {
        hideAsideOnClick()
    }
}