import "../css/Teki.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Treki() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const sections = ["fc-card-first" , "fc-card-second", "l-card-first"];
    const sex = ["sc-card-first", "sc-card-second" , "l-card-second"]

    useEffect(() => {
        const element = ref.current;

        sections.forEach((el) => {
            gsap.to(element.querySelector(`.${el}`), {
                autoAlpha: 0,
                duration: 10,
                // y: -50,
                xPercent: -200,
                scale: 1,
                scrollTrigger: {
                    trigger: element.querySelector(`.${el}`),
                    start: "top 0%",
                    end: "bottom 0%",
                    scrub: 2, // Scrubni yoqish
                },
            });
        });

        sex.forEach((el) => {
            gsap.to(element.querySelector(`.${el}`), {
                autoAlpha: 0,
                duration: 10,
                // y: -50,
                xPercent: 200,
                scale: 1,
                scrollTrigger: {
                    trigger: element.querySelector(`.${el}`),
                    start: "top 0%",
                    end: "bottom 0%",
                    scrub: 2, // Scrubni yoqish
                },
            });
        });
    }, []);

    return (
        <div className="Treki" ref={ref}>
            <div className="container">
                <div className="firs-column">
                    <h2 className="track">Треки ↘️</h2>
                    <div className="fc-card-first"></div>
                    <div className="fc-card-second"></div>
                </div>

                <div className="second-column">
                    <div className="sc-card-first"></div>
                    <div className="sc-card-second"></div>
                </div>
            </div>

            <div className="center-container">
                <div className="card-center"></div>
            </div>

            <div className="last-container">
                <div className="l-card-first"></div>
                <div className="l-card-second "></div>
            </div>
        </div>
    );
}

export default Treki;