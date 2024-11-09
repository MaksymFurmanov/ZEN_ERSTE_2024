import styles from "./game.module.css";
import {useState} from "react";

const ages = [18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64];

export default function AgeSidebar() {
    const [age, setAge] = useState(18);

    return (
        <aside className={styles.AgeSidebar}>
            <p>Age</p>
            <div>
                <div className={styles.selectedAgeBox} style={{top: age * 14}}/>
                {ages.map(ageNum => (
                        <p>
                            {ageNum}
                        </p>
                    )
                )}
            </div>
        </aside>
    )
}