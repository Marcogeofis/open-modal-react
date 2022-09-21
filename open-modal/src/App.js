import openModal from './Components/OpenModal';
import './App.css';

function App() {

  function handleOpenModal(){
    openModal();
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir modal</button>
    </div>
  );
}

export default App;
