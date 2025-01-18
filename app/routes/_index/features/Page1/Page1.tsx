import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Page1(): ReactNode {
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
            <div className={styles.price}>
                <div className={styles.subTitle}>Price</div>
                <div className={styles.ticketPrice}>
                    <div className={styles.text}>1 day ticket ¥1500+1dr</div>
                    <div className={styles.text}>2 days ticcket ¥1500+1dr</div>
                </div>
            </div>
        </div>
    );
}