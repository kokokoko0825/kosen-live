import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Hero(): ReactNode {
    const title = "BorderLess";
    return (
        <div className={styles.hero}>
            <div className={styles.yearConatainer}>
                <div className={styles.yearText}>2025卒業ライブ</div>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    {title.split("").map((char, index) => (
                    <span
                        key={index}
                        className={styles.letter}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {char}
                    </span>
                    ))}
                </div>
            </div>
            <div className={styles.placeContainer}>
                <div className={styles.placeText}>in Suzuka Sound Stage</div>
            </div>
        </div>
    );
 }