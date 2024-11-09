import styles from "./game.module.css";
import InvestCard from "./InvestCard";
import ArrowLeft from "./assets/arrow-left.png";
import ArrowRight from "./assets/arrow-right.png";
import productsToInvest from "./data/products-to-invest";
import productsToBuy from "./data/products-to-buy";
import ProductCard from "./ProductCard";
import OwnedCard from "./OwnedCard";
import { useState } from "react";
import {useProducts} from "./providers/OwnedProductsProvider";

export default function CardsList({ actionCardsRoute }) {
    const {products} = useProducts();
    const [fromIndex, setFromIndex] = useState(0);

    const cards = () => {
        switch (actionCardsRoute) {
            case "invest":
                return productsToInvest.map((product, index) => (
                    <InvestCard key={index} name={product.name} sum={product.sum} />
                ));
            case "buy":
                return productsToBuy.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        sum={product.sum}
                        paymentPeriodInYears={product.paymentPeriodInYears}
                    />
                ));
            case "sell":
                return products.map((product, index) => {
                    return (
                        <OwnedCard
                            key={index}
                            name={product.name}
                            sum={product.sum}
                            type={product.type}
                            paymentPeriodInYears={product.paymentPeriodInYears}
                            yearsPayed={product.yearsPayed}
                        />
                    )
                });
            default:
                return [];
        }
    };

    const renderedCards = cards(); // Store the result of calling cards().

    const handleNext = () => {
        if (fromIndex < renderedCards.length - 1) {
            setFromIndex(fromIndex + 1);
        }
    };

    const handlePrev = () => {
        if (fromIndex > 0) {
            setFromIndex(fromIndex - 1);
        }
    };

    return (
        <div className={styles.CardList}>
            <button disabled={fromIndex === 0} onClick={handlePrev}>
                <img src={ArrowLeft} alt="Previous" />
            </button>
            <div className={styles.cardsWrapper}>
                {renderedCards.slice(fromIndex, fromIndex + 3)}
            </div>
            <button disabled={fromIndex >= renderedCards.length - 3} onClick={handleNext}>
                <img src={ArrowRight} alt="Next" />
            </button>
        </div>
    );
}