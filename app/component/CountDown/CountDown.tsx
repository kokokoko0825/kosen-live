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
        return diffDays;
    }

    return (
        <div className={styles.countDown}>
            <div className={styles.title}>
                <div className={styles.text}>あと</div>
            </div>
            <div className={styles.count}>
                <div className={styles.countText}>{countDown()}</div>
            </div>
            <div className={styles.day}>
                <div className={styles.text}>日</div>
            </div>
        </div>
    );
 }