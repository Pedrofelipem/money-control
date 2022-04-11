import { createContext, useState, useEffect, useContext } from 'react'
import { Transaction } from '../models/transaction';
import { TransactionsContextData } from '../models/transactionsContextData';
import { TransactionsProviderProps  } from '../models/transactionsProviderProps';
import { TrasanctionInput } from '../models/trasanctionInput';
import { api } from '../providers/api'

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
      api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    
    async function createTransaction(transactionInput: TrasanctionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>   
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}