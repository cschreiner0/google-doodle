console.log("OK");
gsap.from("body", { duration: 4, fill: "coral" });
gsap.from("#elephant1", { duration: 3.5, ease: "power2.out", x: -300 });
gsap.from("#hand", { duration: 3, ease: "elastic.out(1, 0.3)", y: 300 });

gsap.from("#luckycat", { duration: 3, ease: "back.out(1.7)", y: -500 });
gsap.from("#clover", {
  duration: 7,
  ease: "power4.out",
  rotation: 20,
  y: -400
});
gsap.from("#worrydoll", { duration: 4, ease: "bounce.out", y: 500 });
gsap.from("#egg", {
  duration: 2.5,
  ease: "elastic.out(1, 0.3)",
  x: 100,
  rotation: 360
});

TweenMax.to("#egg", 6, { rotation: 1 });
myTween.repeat(10).yoyo(true).play();
//gsap.to, gsap.from, gsap.fromTo
//A tween can change a single property of a single object overtime
//gsap.to(".star",{x:750, duration:3};)
//gsap.to(".star", {x:750, scale:2, rotation:360, fill:"yellow", duration:3});
//gsap.to(".star", {stagger:1, x:750, scale:2, rotation:360, fill:"yellow", duration:3});
