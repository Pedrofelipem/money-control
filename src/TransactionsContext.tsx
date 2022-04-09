import { createContext, useState, useEffect } from 'react'
import { Transaction } from './models/transaction';
import { TransactionsProviderProps  } from './models/transactionsProviderProps';
import { api } from './providers/api'

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
      api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
        
    );
}