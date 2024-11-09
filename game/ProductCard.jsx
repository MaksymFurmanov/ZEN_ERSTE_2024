import styles from "./game.module.css";
import {useSetProducts} from "./providers/OwnedProductsProvider";
import {useSetBalance} from "./providers/BalanceProvider";

export default function ProductCard({
                                        name,
                                        sum,
                                        paymentPeriodInYears
                                    }) {
    const {setProducts} = useSetProducts();
    const {setBalance} = useSetBalance();

    const handlePayment = () => {
        setProducts(prevState => [...prevState, {
            name: name,
            sum: sum,
            paymentPeriodInYears: paymentPeriodInYears,
            type: "product"
        }]);

        setBalance(prevState => prevState - sum);
    }

    return (
        <div className={styles.ProductCard}>
            <h2>{name}</h2>
            <b className={styles.sum}>{sum} €{paymentPeriodInYears && "/year"}</b>
            {paymentPeriodInYears && <b>{paymentPeriodInYears}</b>}
            <button onClick={handlePayment}>
                Buy
            </button>
        </div>
    );
}