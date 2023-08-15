import './index.scss';
import { useState } from 'react';


export default function Sorveteria() {

  const[produtos, setPRODUTOS] = useState([]);
  const[produtoNome, setNOME] = useState('');
  const[produtoValor, setVALOR] = useState('');
  
  const adicionarProduto = () => {
    if (produtoNome && produtoValor) {
      const novoProduto = { name: produtoNome, value: produtoValor };
      setPRODUTOS([...produtos, novoProduto]);
      setNOME('');
      setVALOR('');
    }
  };

  const calculo = () => {
    return produtos.reduce((total, produtos) => total + parseFloat(produtos.value), 0);
  };


  return (

    <div className="pagina-lista-tarefa">


<div className='cab'>
            <img src="/assets/images/logo.svg"/>
            <div>Portifolio.me</div>
        </div>

      <div className='container'>

      <img className='img1' src="/assets/images/sorvetrria.png"/>

            <div style={{ position: 'relative', zIndex: 2 }} className='t1'><strong>Sorveteria</strong></div>
        <h1 className='t2'> Novo item </h1>
        <div className='items'>

         <input className='in1' type='text' value={produtoNome} onChange={(e) => setNOME(e.target.value)}/>

         <div className='valor'>
          <h1>R$</h1>
          <input className='in2' type='text' value={produtoValor} onChange={(e) => setVALOR(e.target.value)}/>
         </div>

          <button style={{ fontSize: 20 }}  onClick={adicionarProduto}> <strong>Adicionar</strong> </button>

        </div>

        <div className='lista'>
        <h1 className='t2'> Lista de compras</h1> 
        <h1 className='tt'>Total: R${calculo()}</h1>
        </div>

        <div className='l1'>
        {produtos.map((produto, index) => (
          <div className='separacao' key={index}>
            <span>{produto.name}</span>  
            <span>R${produto.value}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}