import './index.scss';
import {useState} from 'react';


export default function Carro(){

    const[vt, setVT] = useState(0);
    const[parcelas, setPARCELAS] = useState(0);
    const[juros, setJUROS] = useState(0);
    const[v1, setV1] = useState(0);
    const[v2, setV2] = useState(0);


    function alterarVt(e) {
        setVT(Number(e.target.value));
      }
    
      function alterarParcelas(e) {
        setPARCELAS(Number(e.target.value));
      }

      function alterarJuros(e) {
        setJUROS(Number(e.target.value));
      }




      function jurosExtreme() {
        let c1 = vt*(juros/100)*parcelas;
        let c2 = vt + c1;
        setV2(c2);
        let c3 = c2 / parcelas;
        setV1(c3);
      }


  return (

    
    <div className="pagina-correio">


        <div className='cab'>
            <img src="/assets/images/logo.svg"/>
            <div>Portifolio.me</div>
        </div>


      <h1 className='titulo'> Simulador de Compra Veículo </h1>

      <div className='container'>

        <div className='bloco1'> 

        <img src="/assets/images/carro.png"/>

        </div>


        <div className='bloco2'>

            <div className='p1'>
                <h1>Valor Total</h1>
                <input type='text' onChange={alterarVt} value={vt}/>
            </div>

            <div className='p2'>
                <div>
                <h1>Parcelas</h1>
                <input type='text' onChange={alterarParcelas} value={parcelas}/>
                </div>

                <div>
                <h1>Juros Mensal (%)</h1>
                <input type='text' onChange={alterarJuros} value={juros}/>
                </div>
            </div>


            
            <button className='calcular-btn' onClick={jurosExtreme}>Calcular</button>

            <div className='parcela'>
            Parcelas: R$<input type='text' value= {v1} />
            </div>


            <div className='Valor-total'>
            Valor total:  R$<input type='text' value= {v2} />
            </div>

        </div> 


      </div>

     </div> 
        
  )
}
