import styles from "./game.module.css";
import {useSetProducts} from "./providers/OwnedProductsProvider";
import {useState} from "react";
import {useSetBalance} from "./providers/BalanceProvider";

export default function InvestCard({
                                       name,
                                       sum
                                   }) {
    const [inputSum, setInputSum] = useState(sum);
    const {setProducts} = useSetProducts();
    const {setBalance} = useSetBalance();

    const handlePayment = () => {
        setProducts(prevState => {
            const productIndex = prevState.findIndex(product => product.name === name);
            if(productIndex === -1) return [...prevState, {name: name, sum: inputSum, type: "investments"}]
            return prevState.map((product, index) => {
                if(productIndex === index) {
                    return {...prevState[productIndex], sum: prevState[productIndex].sum + Number(inputSum), type: "investments"}
                }
                return product;
            });
        })

        setBalance(prevState => prevState - inputSum);
    }

    return (
        <div className={styles.ProductCard}>
            <div>
                <h2>{name}</h2>
                <div>
                    <p>min</p>
                    <b className={styles.sum}>{sum} €</b>
                </div>
            </div>
            <div>
                <input type={"number"} min={sum} value={inputSum} onChange={(e) => setInputSum(e.target.value)}/>
                <button onClick={handlePayment}>Invest</button>
            </div>
        </div>
    );
}