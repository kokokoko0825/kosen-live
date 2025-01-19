import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as styles from "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export function Page1(): ReactNode {
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
                    trigger: `.${styles.about}`,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className={styles.page1}>
            <div className={styles.about}>
                <div className={styles.title}>About</div>
            </div>
            <div className={styles.date}>
                <div className={styles.subTitle}>Date:</div>
                <div className={styles.text}>3/8(Sat), 3/9(Sun)</div>
            </div>
            <div className={styles.open}>
                <div className={styles.subTitle}>Open:</div>
                <div className={styles.openTime}>
                    <div className={styles.text}>Day1 14:30 ~</div>
                    <div className={styles.text}>Day2 15:30 ~</div>
                </div>
            </div>
            <div className={styles.place}>
                <div className={styles.subTitle}>Place:</div>
                <div className={styles.placeContainer}>
                    <a href={"https://maps.app.goo.gl/6KPiigfwDSoCWDR77"} target="blank" className={styles.text}>Suzuka Sound Stage</a>
                    <div className={styles.subText}>(鈴鹿市磯山1-9-8)</div>
                </div>
            </div>
        </div>
    );
}