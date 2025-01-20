import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { Button } from "app/component/Button/Button";

export function Hero(): ReactNode {
    return (
        <div className={styles.hero}>
            <Button />
            <div className={styles.yearConatainer}>
                <div className={styles.yearText}>2025鈴鹿高専卒業ライブ</div>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.title}></div>
            </div>
            <div className={styles.placeContainer}>
                <div className={styles.placeText}>in Suzuka Sound Stage</div>
            </div>
        </div>
    );
 }