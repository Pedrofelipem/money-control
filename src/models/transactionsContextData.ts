import { Transaction } from "./transaction";
import { TrasanctionInput } from "./trasanctionInput";

export interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (Transaction: TrasanctionInput) => Promise<void>;
}