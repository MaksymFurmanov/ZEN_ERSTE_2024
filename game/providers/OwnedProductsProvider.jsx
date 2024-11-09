import {createContext, useContext, useState} from "react";
import ownedProducts from "../data/owned-products";

const ProductsContext = createContext(undefined);
const SetProductContext = createContext(undefined);

export default function OwnedProductsProvider({children}) {
    const [products, setProducts] = useState(ownedProducts);

    return (
        <SetProductContext.Provider value={{setProducts}}>
            <ProductsContext.Provider value={{products}}>
                {children}
            </ProductsContext.Provider>
        </SetProductContext.Provider>
    );
}

export const useProducts = () => useContext(ProductsContext);
export const useSetProducts = () => useContext(SetProductContext);