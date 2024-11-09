import styles from "./game.module.css";
import {useSetProducts} from "./providers/OwnedProductsProvider";
import {useState} from "react";
import {useSetBalance} from "./providers/BalanceProvider";

export default function OwnedCard({
                                      name,
                                      sum,
                                      type,
                                      paymentPeriodInYears,
                                      yearsPayed
                                  }) {
    const [inputSum, setInputSum] = useState(0);
    const {setProducts} = useSetProducts();
    const {setBalance} = useSetBalance();

    const handleSell = () => {
        const sellAmount = Number(inputSum);

        if (isNaN(sellAmount) || sellAmount <= 0 || sellAmount > sum) return;

        setProducts(prevState => {
            const productIndex = prevState.findIndex(product => product.name === name);
            if (productIndex === -1) return prevState;

            const updatedSum = sum - sellAmount;

            if (updatedSum === 0) {
                return prevState.filter((_, index) => index !== productIndex);
            } else if (type === 'investments') {
                return prevState.map((product, index) =>
                    index === productIndex
                        ? {...product, sum: updatedSum}
                        : product
                );
            }
            return prevState;
        });

        setBalance(prevState => prevState + sellAmount);
    };

    return (
        <div className={styles.ProductCard}>
            <h2>{name}</h2>
            <b className={styles.sum}>
                {`${sum} €`}
            </b>
            {/*{paymentPeriodInYears &&
                <b>{yearsPayed}/{paymentPeriodInYears}</b>}*/}
            {type === "investments" &&
                <input type={"number"}
                       value={inputSum}
                       onChange={(e) =>
                           setInputSum(e.target.value)}/>}
            <button onClick={handleSell}>Sell</button>
        </div>
    );
}