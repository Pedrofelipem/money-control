import logoImg from '../../assets/logo.svg'
import { Container, Content, LogoTipo } from './styles-header'

export function Header(){
    return(
        <Container>
            <Content>
                <LogoTipo>
                    <img src={logoImg} alt="Money control" />
                    <h3>Money control</h3>
                </LogoTipo>
                <button type="button"> Nova transação</button>
            </Content>
        </Container>
    )
}