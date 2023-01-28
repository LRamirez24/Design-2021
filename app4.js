gsap.registerPlugin(ScrollTrigger);





gsap.from(".box", {
    duration: 0.8,
    scale: 0.7, 
    opacity: 0, 
    delay: 0.2, 
    stagger: 0.1,
    ease: "none", 
    force3D: true
  });


//   gsap.from(".transition2", {
//     x: 10,
//     y: 100,
//     opacity: 0,
//     stagger: 1.1,
//     rotation: 10,
//     scrollTrigger: {
//         trigger: ".transition2",
//         start: "top center",
//         end: "top 100px",
    
//     }
// })




gsap.from(".transition4", {
    x: 10,
    y: 100,
    opacity: 0,
    stagger: 1.1,
    rotation: 10,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        end: "top 100px",
    }
})

  gsap.from(".lets-talk", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".lets-talk",
        start: "top center",
        end: "top 100px",
    }
})