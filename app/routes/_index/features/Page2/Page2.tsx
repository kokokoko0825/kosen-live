import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Page2(): ReactNode {
    return (
        <div className={styles.page2}>
            <div className={styles.performers}>
                <div className={styles.title}>Performers</div>
            </div>
            <div className={styles.list}>
                <div className={styles.subTitle8}>3/8(Sat)</div>
                <div className={styles.bandList}>
                    <div className={styles.textEng}>e/m</div>
                    <div className={styles.textEng}>nobody&apos;s</div>
                    <div className={styles.textEng}>r04 Not Found</div>
                    <div className={styles.textJap}>あどばん</div>
                    <div className={styles.textJap}>羅武♥永遠深夜</div>
                </div>
                <div className={styles.andMore}>and more...</div>
            </div>
            <div className={styles.list}>
                <div className={styles.subTitle9}>3/9(Sun)</div>
                <div className={styles.bandList}>
                    <div className={styles.textEng}>alus tale</div>
                    <div className={styles.textEng}>Curious</div>
                    <div className={styles.textEng}>κεεη</div>
                    <div className={styles.textEng}>langue de chat</div>
                    <div className={styles.textJap}>エイチサンジュウ</div>
                    <div className={styles.textJap}>ラルゴ13</div>
                    <div className={styles.textJap}>教職員バンド</div>
                </div>
                <div className={styles.andMore}>and more...</div>
            </div>
        </div>
    );
}