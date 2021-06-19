// window.onscroll = function() {myFunction()};

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;




// //   document.getElementById("myBar").style.width = scrolled + "%";





//     var marginStart = -10;
//     var bgStart = 55;




//     // var bg = "-webkit-linear-gradient(#eee " + (bgStart + (scrolled * 0.2)) + "%, #266288 55%)";
//     // console.log(bg);
//     // console.log(scrolled)





//     document.getElementById("main").style.marginTop = marginStart + (scrolled * 0.2) + "rem";
//     document.getElementById("header__name").style.background = "-webkit-linear-gradient(#eee " + ((bgStart + (scrolled * 0.2)) * 1.2) + "%, #266288 55%)";



// if (document.documentElement.scrollTop == 0) {
//     document.getElementById("main").style.marginTop = marginStart + "rem";
// } else if (document.getElementById("main").style.marginTop < "-5rem") {
//     document.getElementById("main").style.marginTop = -5 + "rem"
// }



// } 
var menu = document.getElementById("menu");


function openMenu() {
    
    menu.style.background = "blue"
}