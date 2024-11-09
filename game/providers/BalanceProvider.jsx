import {createContext, useContext, useState} from "react";

const BalanceContext = createContext(undefined);
const SetBalanceContext = createContext(undefined);

export default function BalanceProvider({children}) {
    const [balance, setBalance] = useState(3000);

    return (
        <SetBalanceContext.Provider value={{setBalance}}>
            <BalanceContext.Provider value={{balance}}>
                {children}
            </BalanceContext.Provider>
        </SetBalanceContext.Provider>
    );
}

export const useBalance = () => useContext(BalanceContext);
export const useSetBalance = () => useContext(SetBalanceContext);