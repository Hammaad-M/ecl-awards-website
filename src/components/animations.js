import { gsap, Power3, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({});
const handleCustomization = (target, waitForScroll) =>
  waitForScroll ? { scrollTrigger: target } : {};
// execute on wrapper, elements will fly in
export const flyInFromRight = (target, waitForScroll = true, speed) => {
  gsap.from(target, {
    x: 300,
    rotate: 80,
    opacity: 0,
    duration: 0.45 / speed,
    y: 10,
    stagger: 0.1,
    scale: 0.2,
    ease: Power3.easeIn(),
    delay: 0.1,
    ...handleCustomization(target, waitForScroll),
  });
};

export const rotateInFromLeft = (target, waitForScroll = true) => {
  gsap.from(target, {
    rotate: 90,
    opacity: 0.8,
    duration: 1.1,
    x: -200,
    scale: 0.2,
    delay: 0.1,
    ...handleCustomization(target, waitForScroll),
  });
};

export const rotateInFromBottom = (target, waitForScroll = true) => {
  gsap.from(target, {
    rotate: 320,
    opacity: 0.8,
    duration: 0.6,
    stagger: 0.2,
    y: 200,
    scale: 0.2,
    delay: 0.1,
    ...handleCustomization(target, waitForScroll),
  });
};

export const fadeIn = (target, waitForScroll = true, speed = 1) => {
  gsap.from(target, {
    opacity: 0.01,
    duration: 0.45 / speed,
    stagger: 0.18 / speed,
    y: 120,
    ease: Power3.easeInOut(),
    delay: 0.1,
    ...handleCustomization(target, waitForScroll),
  });
};
export const fadeInSmall = (target, waitForScroll = true, speed = 1) => {
  gsap.from(target, {
    opacity: 0.01,
    duration: 0.45 / speed,
    stagger: 0.12 / speed,
    y: 50,
    ease: "back",
    delay: 0.1,
    ...handleCustomization(target, waitForScroll),
  });
};
