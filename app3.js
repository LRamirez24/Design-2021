gsap.registerPlugin(ScrollTrigger);



gsap.from(".box", {
    duration: 1.4,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "ease-in", 
    force3D: true
  });

  gsap.from(".transition-value", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.4,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition-value",
        start: "top center",
      
        end: "top 100px",
    }
  });

  gsap.from(".skills-transition", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".skills-transition",
        start: "top center",
      
        end: "top 100px",
    }
  });

