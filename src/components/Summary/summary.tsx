import logo from '../../assets/logo.svg';
import { Container } from './styles-summary';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={logo} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={logo} alt="Entradas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className='righlight-back'>
                <header>
                    <p>Total</p>
                    <img src={logo} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}