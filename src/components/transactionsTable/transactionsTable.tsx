import { Container } from "./styles-transactionsTable";

export function TransactionsTable(){
    return(
        <Container>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
    
            <tbody>
                <tr>
                  <td>Desenvolvimento de wepsite</td>
                  <td className="deposit">R$12.000,00</td>
                  <td>Desenvolvimento</td>
                  <td>01/04/2022</td>
                  </tr>
                <tr>
                  <td>Aluguel</td>
                  <td className="whithdraw">- R$1.200,00</td>
                  <td>Casa</td>
                  <td>02/04/2022</td>
                </tr> 
            </tbody>
          </table>
        </Container>
    )
}