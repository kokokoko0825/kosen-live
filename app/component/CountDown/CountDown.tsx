import { ReactNode } from "react";
import * as styles from "./styles.css";

export function CountDown(): ReactNode {
    function countDown() {
        const today = new Date();
        const eventMonth = 3;
        const eventDay = 8;
        const getEventDate = new Date(2025, eventMonth - 1, eventDay);
        const diffTime = getEventDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 0){
            return (
                <div className={styles.countDown}>
                    <div className={styles.title}>
                        <div className={styles.text}>開催まであと</div>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.countText}>{diffDays}</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.text}>日</div>
                    </div>
                </div>
            );
        }
        else if (diffDays === 0 || diffDays === -1){
            return (
                <div className={styles.countDown}>
                    <div className={styles.title}>
                        <div className={styles.text}></div>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.affterText}>!! 開催中 !!</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.text}></div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={styles.countDown}>
                    <div className={styles.title}>
                        <div className={styles.text}></div>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.affterText}>来年もお楽しみに!!</div>
                    </div>
                    <div className={styles.day}>
                        <div className={styles.text}></div>
                    </div>
                </div>
            );
        }

    }

    return (
        countDown()
    );
 }