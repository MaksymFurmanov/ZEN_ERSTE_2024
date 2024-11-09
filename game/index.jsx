import styles from "./game.module.css";
import Header from "./Header";
import {useState} from "react";
import OwnedProductsProvider from "./providers/OwnedProductsProvider";
import Footer from "./Footer";
import AgeSidebar from "./AgeSidebar";
import GameDisplay from "./GameDisplay";
import BalanceProvider from "./providers/BalanceProvider";

export default function Game() {
    const [cashFlow, setCashFlow] = useState(100);

    return (
        <BalanceProvider>
            <OwnedProductsProvider>
                <main className={styles.Game}>
                    <div className={styles.gameBody}>
                        <Header cashFlow={cashFlow}/>
                        <GameDisplay/>
                        <Footer/>
                    </div>
                    <AgeSidebar/>
                </main>
            </OwnedProductsProvider>
        </BalanceProvider>
    );
}