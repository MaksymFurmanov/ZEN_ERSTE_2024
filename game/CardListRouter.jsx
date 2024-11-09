import styles from "./game.module.css";

export default function CardListRouter({changeRoute}) {
    return (
        <div className={styles.CardListRouter}>
            <button onClick={() => changeRoute("invest")}>
                Invest
            </button>
            <button onClick={() => changeRoute("buy")}>
                Buy
            </button>
            <button onClick={() => changeRoute("sell")}>
                Sell
            </button>
        </div>
    );
}