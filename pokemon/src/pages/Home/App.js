import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';



function App() {

  function oi() {
    toast.dark('cabaço');
  }


  function alterouTexto(e) {

  }



  return (
    <div className='pagina-app'>
      <ToastContainer />
      <div className="App">
        <h1 className='t1'> Sabia que o sabiá sabia assobiar? </h1>

        <button onClick={oi}> Click </button>

        <input type='text' onChange={alterouTexto} />


      </div>

      <h1 className='é'> SITES LINKADOS NESTA PÁGINA:</h1>
      <Link className='voltar' to='./pokemon'> Pokemon </Link>
    </div>
  );

}

export default App;