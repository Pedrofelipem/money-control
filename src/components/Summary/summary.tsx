import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg'
import { Container } from './styles-summary';

export function Summary(){ 
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Entradas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className='righlight-back'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}