



function ToggleDarkMode(){
    document.body.classList.toggle("DarkMode")
}

function OpenSideBar(){
    document.body.classList.toggle("active")
}
function CloseBar(){
    document.body.classList.toggle("active")
}


//--------------------------Side Bar----------------------------

// Side Bar not appearing on resize after closing fix
// function resizeEvent(){
//     let width = window.innerWidth
//     if (width > 1024){
//         document.getElementById("sideNav").style.height="100%"
//         document.getElementById("sideNav").style.position="static"
//     }
//     // If we don't do this the buttons won't do anything :(
//     else if (width <=768){
//         document.getElementById("sideNav").style.width="0"
//         document.getElementById("sideNav").style.height="100%"
//         document.getElementById("sideNav").style.paddingRight="0"
//         document.getElementById("sideNav").style.position="fixed"
//     }
//     else if (width <= 1024 && width > 768){
//         document.getElementById("sideNav").style.height="0"
//         document.getElementById("sideNav").style.width="100%"
//         document.getElementById("sideNav").style.paddingBottom="0"
//         document.getElementById("sideNav").style.position="fixed"
//     }
// }
// 
// function OpenSideBar(){
//     let width = window.innerWidth
//     if (width <= 768){
//         console.log("button pressed at 768")
//         document.getElementById("sideNav").style.width="45%"
//         document.getElementById("sideNav").style.paddingRight="10px"
//     }
//     else if (width <= 1024){
//         console.log("button pressed at 1024")
//         document.getElementById("sideNav").style.height="45%"
//         document.getElementById("sideNav").style.paddingBottom="10px"
//     }
// }
// function CloseBar(){
//     let width = window.innerWidth
//     if (width <= 768){
//         console.log("button pressed at 768")
//         document.getElementById("sideNav").style.width="0"
//         document.getElementById("sideNav").style.paddingRight="0"
//     }
//     else if (width <= 1024){
//         console.log("button pressed at 1024")
//         document.getElementById("sideNav").style.height="0"
//         document.getElementById("sideNav").style.paddingBottom="0"
//     }
// }

