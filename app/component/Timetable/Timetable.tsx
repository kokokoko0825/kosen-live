import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as styles from "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export function Timetable(): ReactNode {
    useEffect(() => {
        gsap.fromTo(
            `.${styles.title}`,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: `.${styles.timetable}`,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className={styles.page3}>
            <div className={styles.timetable}>
                <div className={styles.title}>Timetable</div>
            </div>
            <div className={styles.list}>
                {/*
                <div className={styles.textEng}>coming soon ...</div>
                */}
                <p className={styles.image}></p>
            </div>
        </div>
    );
}