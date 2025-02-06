import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as styles from "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export function Ticket(): ReactNode {
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
                    trigger: `.${styles.ticket}`,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className={styles.ticketContainer}>
            <div className={styles.ticket}>
                <div className={styles.title}>Ticket</div>
            </div>
            <div className={styles.price}>
                <div className={styles.subTitle}>Price:</div>
                <div className={styles.placeContainer}>
                    <div className={styles.text}>1 day ticket ¥1000+1dr</div>
                    <div className={styles.text}>2 days ticket ¥1500+1dr</div>
                </div>
            </div>
            <div className={styles.subText}>* 1dr(ドリンク代): ¥500 *</div>
            <div className={styles.subText}>* 2 days ticketの場合、ドリンク代が両日ともに必要です *</div>
        </div>
    );
}