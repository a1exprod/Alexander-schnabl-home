
window.onload=function(){
    navbartoggling();
}

function navbartoggling(){
    const navigation = document.querySelector(".nav");
    const navToggle = document.querySelector(".mobile-navtoggle");
    const header = document.querySelector(".header");
    const headernavbutton = document.querySelector(".header mobile-navtoggle");
    const body = document.querySelector("body");

    navToggle.addEventListener("click", function(){
        const checkvisible = navigation.getAttribute("data-visible");
       
        if(checkvisible==="false"){
            navigation.setAttribute("data-visible",true);
            navToggle.setAttribute("aria-expanded",true);
            navToggle.style.backgroundColor="rgb(0, 161, 156)";
            navigation.style.transition="transform 100ms ease-out";
            
        }
        else{
            navigation.setAttribute("data-visible",false);
            navToggle.setAttribute("aria-expanded",false);
            navToggle.style.backgroundColor="rgb(0, 161, 156)";
            navToggle.style.padding.left="10px";
            header.style.transition="0.1s";
            header.style.backgroundColor="rgba(250,250,250,1)";
        }
    });
}


function loadlandingpage(){
    window.location.href="../index.html";   
}


