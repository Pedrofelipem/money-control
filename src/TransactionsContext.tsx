import { createContext, useState, useEffect } from 'react'
import { Transaction } from './models/transaction';
import { TransactionsContextData } from './models/transactionsContextData';
import { TransactionsProviderProps  } from './models/transactionsProviderProps';
import { TrasanctionInput } from './models/trasanctionInput';
import { api } from './providers/api'

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
      api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    
    function createTransaction(transaction: TrasanctionInput) {
    api.post('/transactions', transaction)
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
        
    );
}