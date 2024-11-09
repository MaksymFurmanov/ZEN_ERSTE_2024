import styles from "./game.module.css";
import {goals} from "./data/goals";
import NextButton from "./assets/next-button.png";

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.goals}>
                <h2>Goals</h2>
                {goals.map((goal, index) => (
                    <p key={index}>
                        {`${goal.name} ${goal.sum} by ${goal.age}`}
                    </p>
                ))}
            </div>

            <button className={styles.nextButton}>
                <img src={NextButton}
                     alt={""}
                />
            </button>
        </footer>
    );
}