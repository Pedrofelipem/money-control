
import { Summary } from '../Summary/summary'
import { TransactionsTable } from '../TransactionsTable/transactionsTable'
import {Container} from './styles-deshboard'
export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )  
}