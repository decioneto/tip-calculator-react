import { createContext, ReactNode, useState } from "react";

type CalculateContextProps = {
    billValue: number;
    setBilLValue: React.Dispatch<React.SetStateAction<number>>;
    tipValue: number;
    setTipValue: React.Dispatch<React.SetStateAction<number>>;
    dividedBy: number;
    setDividedBy: React.Dispatch<React.SetStateAction<number>>;
}

type CalculateContextProviderProps = {
    children: ReactNode;
}

export const CalculateContext = createContext({} as CalculateContextProps);

export function CalculateContextProvider({ children } : CalculateContextProviderProps) {
    const [billValue, setBilLValue] = useState(0)
    const [tipValue, setTipValue] = useState(0)
    const [dividedBy, setDividedBy] = useState(0)

    return (
        <CalculateContext.Provider 
            value={{ 
                billValue,
                setBilLValue,
                tipValue,
                setTipValue,
                dividedBy,
                setDividedBy
            }}
        >
            { children }
        </CalculateContext.Provider>
    )
}