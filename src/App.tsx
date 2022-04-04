import { Dashboard } from "./components/Dashboard/dashboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionOPen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTrasactionOPen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTrasactionOPen(false);
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h3>Cadastrar transação</h3>
      </Modal>

      <GlobalStyle />
    </> 
  );
}
