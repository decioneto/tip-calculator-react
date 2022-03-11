import { createContext, ReactNode, useState } from "react";

type CalculateContextProps = {
    billValue: string;
    setBilLValue: React.Dispatch<React.SetStateAction<string>>;
    tipValue: string;
    setTipValue: React.Dispatch<React.SetStateAction<string>>;
    customTipValue: string;
    setCustomTipValue: React.Dispatch<React.SetStateAction<string>>;
    dividedBy: string;
    setDividedBy: React.Dispatch<React.SetStateAction<string>>;
}

type CalculateContextProviderProps = {
    children: ReactNode;
}

export const CalculateContext = createContext({} as CalculateContextProps);

export function CalculateContextProvider({ children } : CalculateContextProviderProps) {
    const [billValue, setBilLValue] = useState('')
    const [tipValue, setTipValue] = useState('')
    const [customTipValue, setCustomTipValue] = useState('')
    const [dividedBy, setDividedBy] = useState('')

    return (
        <CalculateContext.Provider 
            value={{ 
                billValue,
                setBilLValue,
                tipValue,
                setTipValue,
                customTipValue,
                setCustomTipValue,
                dividedBy,
                setDividedBy
            }}
        >
            { children }
        </CalculateContext.Provider>
    )
}