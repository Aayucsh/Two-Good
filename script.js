const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function videoanimate(){
    var videocont = document.querySelector(".video-cont")
var playbtn = document.querySelector(".play")

videocont.addEventListener(("mouseenter"),function(){
    gsap.to(playbtn,{
        opacity:1,
        scale: 1
    })
})
videocont.addEventListener(("mouseleave"),function(){
    gsap.to(playbtn,{
        opacity:0,
        scale: 0
    })
})
videocont.addEventListener(("mousemove"),function(dets){
    gsap.to(playbtn,{
        left: dets.x-80,
        top: dets.y-80
    })
})
}
videoanimate()


function loadanimate(){
    gsap.from(".page1 h1", {
        y: 100,
        delay: 0.5,
        opacity: 0,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from(".video-cont", {
        y: 100,
        delay: 0.9,
        opacity: 0,
        duration: 0.9,
        scale: 0.9
    })
}
loadanimate()

function cursorscroll(){
    //  document.querySelector(".mousearr")
    var area = document.querySelectorAll(".p1")

    area.forEach(element => {
        element.addEventListener(("mouseenter"), function(){
            gsap.to(".cursor",{
                opacity:1,
                scale:1
            })
        })
        element.addEventListener(("mouseleave"), function(){
            gsap.to(".cursor",{
                opacity:0,
                scale:0
            })
        })
    });
    document.addEventListener(("mousemove"),function(dets){
        gsap.to(".cursor",{
            left : dets.x,
            top : dets.y,
            transform: "translate(-50%,-50%)"
        })
    })


}
cursorscroll()

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".offscreen");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});