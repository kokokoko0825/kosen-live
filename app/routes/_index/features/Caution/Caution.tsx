import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as styles from "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export function Caution(): ReactNode {
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
                    trigger: `.${styles.toptitle}`,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className={styles.caution}>
            <div className={styles.toptitle}>
                <div className={styles.title}>Caution</div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.text}>・会場には駐車場がありません。そのため、公共交通機関のご利用をお願いします。</div>
                <div className={styles.text}>・当日はドリンク代として500円を持ってきてください。</div>
            </div>
        </div>
    );
}