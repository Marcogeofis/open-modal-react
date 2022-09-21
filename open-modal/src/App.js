import {openModal, openModalAccount} from './Components/OpenModal';
import './App.css';

function App() {

  function handleOpenModal(){
    openModal();
  }

  function handleOpenModalAccount(){
    openModalAccount();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir modal</button>
      <button onClick={handleOpenModalAccount}>Abrir modal</button>
    </div>
  );
}

export default App;
