import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';



function App() {

  function oi() {
    toast.dark('Boa boia então!');
  }


  function alterouTexto(e) {

  }



  return (
    <div className='pagina-app'>
      <ToastContainer />
      <div className="App">
        <h1 className='t1'> Tá bem padrin? </h1>

        <button onClick={oi}> Sim </button>

        <input type='text' onChange={alterouTexto} />


        
        <Link className='voltar' to='./sorveteria'> Sorveteria </Link>


      </div>
    </div>
  );

}

export default App;