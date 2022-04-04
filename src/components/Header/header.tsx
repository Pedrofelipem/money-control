import logoImg from '../../assets/logo.svg'
import { Container, Content, LogoTipo } from './styles-header'
interface HeaderProps{
    onOpenNewTransactionModal():void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps){
    return(
        <Container>
            <Content>
                <LogoTipo>
                    <img src={logoImg} alt="Money control" />
                    <h3>Money control</h3>
                </LogoTipo>
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}