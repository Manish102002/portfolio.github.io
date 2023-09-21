
            // srcoll locomotive css

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



            // custom cursor
// function position (e){
//     var flag = document.getElementById("custom-cursor");
//     flag.style.position = "fixed";
//     flag.style.top = e.clientY + "px";
//     flag.style.left = e.clientX + "px";
// }



            // menu bar 
var menu = document.querySelector(".menu");
var menuclick = document.querySelector("#menutag")

var dabaye = 1

menuclick.addEventListener("click" , function(){

    if(dabaye==1){
    menu.style.display = "contents"
    menuclick.style.transition = "linear 1s"
    dabaye=0;
    }else {
    menu.style.display = "none"
    menuclick.style.transition = "none"
    dabaye = 1;
}  
})


            // gsap use for loader
var tl = gsap.timeline()

tl.to("#partonee", {
    y:"30vh",
    scale:0.6,
    duration: 0
})

tl.to("#partonee", {
    y: "30vh",
    duration: 1,
    delay:1
})

tl.to("#partonee",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})




