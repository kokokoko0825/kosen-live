import { useState, ReactNode } from "react";
import * as styles from "./styles.css";

export function Button(): ReactNode { 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.header}>
                {menuOpen && (
                    <div className={styles.menu}>
                        <a className={styles.menuItem} href={"app/component/Information"}>Information</a>
                        <div className={styles.menuItem}>TimeTable</div>
                        <div className={styles.menuItem}>Ticket</div>
                    </div>
                )}
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <div className={styles.menuButtonLine}></div>
                    <div className={styles.menuButtonLine}></div>
                    <div className={styles.menuButtonLine}></div>
                </button>
            </div>
        </>
    );
}