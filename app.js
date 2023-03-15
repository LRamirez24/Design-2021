const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });

gsap.registerPlugin(ScrollTrigger);


tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro-video', { y: "-100%", duration: 1 }, "-=1");

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1.4");
tl.fromTo('.stagger2', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1.5 }, "-=1");
tl.fromTo('.hero-image-section', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 2 }, "-=1.4");
// tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1.4");

// tl.fromTo('.p-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.4");

//gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
// gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });


//Pin the first page
// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "100%",
//     pin: true,
//     pinSpacing: false,
//   },
// });


// gsap.from(".text-transition", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".text-transition",
//         start: "top center",
//         end: "top 100px",
//     }
// })


// Extra Animations for first section 
// This is for the pinned video section version 1

// const tltop = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-section",
//     start: "30%",
//     end: "100%",
//     // scrub: true,
//     pin: true,
//     pinSpacing: false,
//   //   markers: { startColor: "blue", endColor: "red" }
//   },
// });


const tltop = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-section",
      start: "20%",
      end: "80%",
      scrub: true,
      // pin: true,
      // pinSpacing: false,
    //   markers: { startColor: "blue", endColor: "red" }
    },
  });
  
  tltop.fromTo(".img-01", { y: 0 }, { y: -80 });
  tltop.fromTo(".img-02", { y: 0 }, { y: -100 }, "<");
  tltop.fromTo(".img-03", { y: 0 }, { y: -80 }, "<");

  //   tltop.fromTo(".img-01", { y: 0 }, { y: -100 });
  // tltop.fromTo(".img-02", { y: 0 }, { y: -100 }, "<");
  // tltop.fromTo(".img-03", { y: 0 }, { y: -100 }, "<");




//   //Highlight PAGE 2
// This is for when the video is pinned to the top section

// const tlH = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second-page",
//   //   markers: { startColor: "blue", endColor: "blue" },
//     scrub: true,
//     start: "-40%",
//     end: "40%",
//   },
// });



  //Highlight PAGE 2
const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: ".second-page",
    //   markers: { startColor: "blue", endColor: "blue" },
      scrub: 1,
      start: "-50%",
      end: "0%",
    },
  });

  //  tlH.fromTo(".smoke-video",  {opacity: 0},  {opacity: 1}, "<");
   tlH.fromTo(".smoke-video",  {scale: 0.5},  {scale: 1, duration: 1.4 }, "<");

  // video

  const video = document.querySelector("#background_video")
ScrollTrigger.create({
    start: "0%",
  end: "60%",
  trigger: "#video",
  scrub: true,
  onEnter: () => video.play(),
  onLeave: () => video.pause(),
  onEnterBack: () => video.play(),
    // markers: { startColor: "blue", endColor: "blue" }
});


gsap.from(".recent-work", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".recent-work",
        start: "top center",
        end: "top 100px",
    }
})


gsap.from(".transition2", {
    x: 00,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 10,
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center",
        end: "top 100px",
    
    }
})


// gsap.from(".transition3", {
//     x: 10,
//     y: 10,
//     opacity: 0,
//     stagger: 2.2,
//     rotation: 10,
//     scrollTrigger: {
//         trigger: ".transition3",
//         start: "top center",
//         end: "top 100px",
//         scrub: true,
//     }
// })

gsap.from(".transition4", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 10,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        end: "top 100px",
    }
})

// gsap.from(".transition5", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".transition5",
//         start: "top center",
//         end: "top 100px",
//     }
// })



gsap.from(".view-more-section", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".view-more-section",
        start: "top center",
        end: "top 100px",
    }
})

// gsap.from(".my-picture2", {
//     x: 0,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".my-picture2",
//         start: "top center",
//         end: "top 100px",
//     }
// })

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

// gsap.from(".new-footer", {
//     x: 0,
//     y: -200,
//     opacity: 0,
//     stagger: 1.4,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".new-footer",
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


// gsap.from(".transitionticker", {
//   x: 0,
//   y: 100,
//   opacity: 0,
//   stagger: 0.8,
//   rotation: 0,
//   scrollTrigger: {
//       trigger: ".transitionticker",
//       start: "top center",
    
//       end: "top 100px",
//   }
// });






// const dur = 30;

// document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {
//   // Get the initial size of the ticker
//   const totalDistance = $(ticker).width();
  
//   // Position the ticker
//   gsap.set(ticker, {yPercent: -50});
  
//   // Clone the first item and add it to the end
//   $(ticker).append($(ticker.querySelector("li")).clone());
  
//   // Get all of the items
//   const items = ticker.querySelectorAll("li");
  
//   const anim = gsap.to(ticker, { 
//     duration: dur,
//     x: -totalDistance,
//     ease: "none",
//     repeat: -1
//   });

//   let startPos;
//   const wrap = gsap.utils.wrap(0, 1);

// });






