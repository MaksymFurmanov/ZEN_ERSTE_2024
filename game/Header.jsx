import styles from "./game.module.css";
import BurgerMenu from "./assets/burger-menu.png";
import {useBalance} from "./providers/BalanceProvider";

export default function Header({cashFlow}) {
    const {balance} = useBalance();

    return (
        <header className={styles.Header}>
            <div>
                <button>
                    <img className={styles.menuButton}
                         src={BurgerMenu}
                         alt={""}
                    />
                </button>
                <div>
                    <p>Balance</p>
                    <p>{balance} €</p>
                </div>
            </div>
            <div className={styles.cashFlow}>
                <button>Details</button>
                <div>
                    <p>Cash Flow</p>
                    <p>{cashFlow} €/year</p>
                </div>
            </div>
        </header>
    );
}