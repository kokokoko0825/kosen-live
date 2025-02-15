import { ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as styles from "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export function Information(): ReactNode {
    
    useEffect(() => {
        if (typeof document !== "undefined") {
            gsap.fromTo(
                `.${styles.title}`,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: `.${styles.information}`,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className={styles.page3}>
            <div className={styles.information}>
                <div className={styles.title}>Information</div>
            </div>
            <div className={styles.infoContainer}>
            <div className={styles.list}>
                    <div className={styles.date}>2025.02.15</div>
                    <div className={styles.newest}>new!</div>
                    <div className={styles.textEng}>Timetableを一部変更しました。</div>
                </div>
                <div className={styles.list}>
                    <div className={styles.date}>2025.02.09</div>
                    <div className={styles.newest}>new!</div>
                    <div className={styles.textEng}>Timetable 公開!</div>
                </div>
                {/*}
                <div className={styles.list}>
                    <div className={styles.date}>2025.02.08</div>
                    <div className={styles.newest}>new!</div>
                    <div className={styles.textEng}>ラディッシュ &nbsp;参戦決定!</div>
                </div>
                */}
                <div className={styles.list}>
                    <div className={styles.date}>2025.02.06</div>
                    <div className={styles.newest}>new!</div>
                    <div className={styles.textEng}>Ticketブースの内容を一部変更しました。</div>
                </div>
                {/* 
                <div className={styles.list}>
                    <div className={styles.date}>2025.01.30</div>
                    <div className={styles.newest}>    </div>
                    <div className={styles.textEng}>MAD STMACHACHES, &nbsp;The Beginner &nbsp;参戦決定!</div>
                </div>
                <div className={styles.list}>
                    <div className={styles.date}>2025.01.25</div>
                    <div className={styles.newest}>    </div>
                    <div className={styles.textEng}>Day my dream &nbsp;参戦決定!</div>
                </div>
                */}
                <div className={styles.list}>
                    <div className={styles.date}>2025.01.21</div>
                    <div className={styles.newest}>    </div>
                    <div className={styles.textEng}>2025鈴鹿高専卒業ライブ開催決定!</div>
                </div>
            </div>
        </div>
    );
}