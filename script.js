// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// Shery.mouseFollower();
// Shery.makeMagnet("#magnet");

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()

gsap.from("nav",{
    y:-100,
    opacity:0,
    duration:1
})

var tl1 = gsap.timeline()
tl1.from(".center .c-left",{
    x:-100,
    opacity:0,
    duration:0.8

})
tl1.from(".center .c-right",{
    x:100,
    opacity:0,
    duration:0.8
})
tl1.from(".center",{
    
    duration:0.2,
    left:"0"
})
tl1.from(".page1 hr",{
    width:0,
    duration:0.5
})


var menu = document.querySelector("nav i")
var cross = document.querySelector(".full .ri-close-line")

var tl = gsap.timeline()

tl.to(".full",{
    right:"0",
    duration:0.6,
    
})
tl.from(".full .l-elem",{
    y:10,
    duration:0.4,
    stagger:0.28,
    opacity:0
})
tl.from(".socialdiv",{
    y:10,
    duration:0.4,
    opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})


document.querySelector(".f-text button")
.addEventListener("mouseover",function(){
    gsap.to(".future video",{
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector(".f-text button")
.addEventListener("mouseleave",function(){
    gsap.to(".future video",{
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})

gsap.from(".f-heading",{
    x:-100,
    duration:0.5,
    stagger:0.28,
    opacity:0,
    scrollTrigger:{
        trigger:".f-heading",
        start:"50% 70%"
    }
})
gsap.from(".bottom-part1",{
    x:-100,
    duration:0.5,
    stagger:0.28,
    opacity:0,
    scrollTrigger:{
        trigger:".bottom-part1",
        start:"50% 90%",
        end:"50% 80%"
    }
},'a')
gsap.from(".bottom-part2",{
    x:100,
    duration:0.5,
    stagger:0.28,
    opacity:0,
    scrollTrigger:{
        trigger:".bottom-part2",
        start:"50% 90%",
        end:"50% 80%"
    }
},'a')

gsap.from(".swipepart",{
    x:-100,
    duration:0.5,
    stagger:0.28,
    opacity:0,
    scrollTrigger:{
        trigger:".swipepart",
        start:"50% 90%",
        end:"50% 80%"
    }
})




