splt({})
// gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()
tl.from(".content h2", {
    y: "-100px",
    opacity:0
})
tl.from(".content h1", {
    scale:4,
    opacity:0
})
// tl.from(".content h3", {
//     x:"-100%",
//     opacity:0,
//     scrollTrigger:{
//         trigger:".page1",
//         scroller:"body",
//         start:"top top",
//         end:"top -50%",
//         pin:true,
//         scrub:1,
//     }

// })


gsap.to(".dot",{
    scale:"2.5",
repeat:-1,
ease:"linear",
yoyo:true
})