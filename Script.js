

let width = window.innerWidth




function ToggleDarkMode(){
    document.body.classList.toggle("DarkMode")
}


//--------------------------Side Bar----------------------------

// Side Bar not appearing on resize after closing fix
function resizeEvent(){
    if (width > 1024){
        document.getElementById("sideNav").style.height="100%"
        document.getElementById("sideNav").style.position="static"
    }
    // If we don't do this the buttons won't do anything :(
    else if (width <= 1024){
        document.getElementById("sideNav").style.height="0"
        document.getElementById("sideNav").style.position="fixed"
    }
}

function OpenSideBar(){
    if (width <= 1024){
    document.getElementById("sideNav").style.height="45%"
    document.getElementById("sideNav").style.paddingBottom="10px"
    }
}
function CloseBar(){
    if (width <= 1024){
    document.getElementById("sideNav").style.height="0"
    document.getElementById("sideNav").style.paddingBottom="0"
    }
}

