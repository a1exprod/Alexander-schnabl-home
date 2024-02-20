
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
            navToggle.style.backgroundColor="transparent";
            navigation.style.transition="transform 350ms ease-out";
            
        }
        else{
            navigation.setAttribute("data-visible",false);
            navToggle.setAttribute("aria-expanded",false);
            navToggle.style.backgroundColor="rgba(0,53,97,0.9)";
            navToggle.style.padding.left="10px";
            header.style.transition="0.3s";
            header.style.backgroundColor="rgba(0,53,97,0.9)";
        }
    });
}


function loadlandingpage(){
    window.location.href="../index.html";   
}


