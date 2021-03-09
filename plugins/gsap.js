import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
}