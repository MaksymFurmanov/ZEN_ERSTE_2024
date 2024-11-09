import styles from "./game.module.css";

import CardsList from "./CardsList";
import CardListRouter from "./CardListRouter";
import {useState} from "react";

export default function GameDisplay() {
    const [actionCardsRoute, setActionCardsRoute] = useState("invest");

    return (
        <div className={styles.GameDisplay}>
            <CardsList actionCardsRoute={actionCardsRoute}/>
            <CardListRouter changeRoute={setActionCardsRoute}/>
        </div>
    );
}