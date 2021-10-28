const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });
gsap.registerPlugin(ScrollTrigger);


tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro-video', { y: "-100%", duration: 1 }, "-=1");

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1.4");
tl.fromTo('.stagger2', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1.5 }, "-=1");
tl.fromTo('.me', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 2 }, "-=1.4");
// tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1.4");

// tl.fromTo('.p-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.4");

//gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });



gsap.from(".text-transition", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".text-transition",
        start: "top center",
        end: "top 100px",
    }
})


gsap.from(".projects-title", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".projects-title",
        start: "top center",
        end: "top 100px",
    }
})


gsap.from(".transition2", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center",
        end: "top 100px",
    }
})


gsap.from(".transition3", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -0,
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".transition4", {
    x: 200,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".transition5", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition5",
        start: "top center",
        end: "top 100px",
    }
})



// gsap.from(".transition6", {
//     x: -100,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".transition6",
//         start: "top center",
//         end: "top 100px",
//     }
// })

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

// gsap.from(".my-picture3", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture3",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture4", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture4",
//         start: "top center",
//         end: "top 100px",
//     }
// })

// gsap.from(".my-picture5", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: -100,
//     scrollTrigger: {
//         trigger: ".my-picture5",
//         start: "top center",
//         end: "top 100px",
//     }
// })


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

//js ticker


gsap.from(".transitionticker", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transitionticker",
      start: "top center",
    
      end: "top 100px",
  }
});






const dur = 30;

document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {
  // Get the initial size of the ticker
  const totalDistance = $(ticker).width();
  
  // Position the ticker
  gsap.set(ticker, {yPercent: -50});
  
  // Clone the first item and add it to the end
  $(ticker).append($(ticker.querySelector("li")).clone());
  
  // Get all of the items
  const items = ticker.querySelectorAll("li");
  
  const anim = gsap.to(ticker, { 
    duration: dur,
    x: -totalDistance,
    ease: "none",
    repeat: -1
  });

  let startPos;
  const wrap = gsap.utils.wrap(0, 1);

});






