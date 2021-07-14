const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });
gsap.registerPlugin(ScrollTrigger);




tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1.4 });

tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .4, duration: 2 }, "-=1");
tl.fromTo('.my-picture2', { opacity: 0 }, { opacity: 1, stagger: .4, duration: 2 }, "-=1");


tl.fromTo('.p-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
// gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });



  


// gsap.from(".my-picture2", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture2",
//         start: "top center",
//         end: "top 100px",
//     }
// })

gsap.from(".my-picture3", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".my-picture3",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".my-picture4", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".my-picture4",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".my-picture5", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".my-picture5",
        start: "top center",
        end: "top 100px",
    }
})


//gsap.to(".boxes", 1, {
//  scale: 0.1,
//y: 500,
//yoyo: true,
//repeat: 1,
//ease: "power1.inOut",
//delay: 1,
//stagger: {
//  amount: 0,
//grid: "auto",
//from: "center"
// }
//});