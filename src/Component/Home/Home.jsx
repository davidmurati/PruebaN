import { useState, useEffect  } from 'react'
import "./Home.css";
import logoN from '../Login/logoN.png'; 
import Select from 'react-select'




const Home = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [option, setOption] = useState('');


const options = [
    { value: 'You', label: 'You' },
    { value: 'Perplexity', label: 'Perplexity' },
    { value: 'OpenA', label: 'OpenA' },
    { value: 'GoogleBar', label: 'GoogleBar' },
    { value: 'Llama2', label: 'Llama2' },
    { value: 'CodeLlama', label: 'CodeLlama' },
    { value: 'ChatPDF', label: 'ChatPDF' },
    { value: 'GPT', label: 'GPT' },
    { value: 'GPTnbx', label: 'GPTnbx' }
  ]


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (option==="You") {
        window.location.href = 'https://you.com/search?q=';
        
      } else if (option==="Perplexity") {
        window.location.href = 'https://www.perplexity.ai/?q=';
        
      }  else if (option==="OpenA") {
        window.location.href = 'https://open-assistant.io/dashboard';
         
      }else if (option==="GoogleBar") {
        window.location.href = 'https://bard.google.com/?hl=es';
         
      }else if (option==="Llama2") {
        window.location.href = 'https://www.llama2.ai/';
         
      }else if (option==="CodeLlama") {
        window.location.href = 'https://labs.perplexity.ai/';
         
      }else if (option==="ChatPDF") {
        window.location.href = 'https://chatwithpdf.ai/';
         
      }else if (option==="GPT") {
        window.location.href = 'https://gpt.h2o.ai/?hp=chat&utm_source=h2o.ai&utm_medium=referral&utm_campaign=h2o-home-page-plg&_ga=2.2391152.1734232450.1694226193-377963146.1693494970';
         
      }else if (option==="GPTnbx") {
        window.location.href = 'https://chat.nbox.ai/';
         
      }else {
        contador=o;
        alert("No selecciono ninguna de las alternativas");
      }


  };

  useEffect(() => {

    
       
    }, []);

     // sacar dato del selector para enviarlo con el boton que es la otra funcion 
    const find = ({ value }) => {
    
    console.log(value);
    setOption(value);
  };

  
  return (

    <form onSubmit={handleSubmit}>
    <div>
     

    <div className="card3">
        <h1>IA sin necesidad de VPN</h1>
        
        </div>


      <div className="logo-container">
        <img src={logoN} className="App-logo" alt="logo" />
        
        </div>
        
        <main>

          

          <section id="listaE"> 

            <div className="card">
            
            <h3>{"Selecciona la plataforma con la que quieres consultar"}</h3>
            

            <div className="card6">
            <div className="selector">
            <label>
             IA Disponible:
            </label>
            <Select options={options} 
             onChange={(e) => find(e)}/>
      
      </div>
            </div>

            <div className="card5">
            <button className="boton" type="submit">Enviar</button  >
            </div>

            <p>{"Cada una de las alternativas son organizaciones que pueden cambiar sus políticas de uso. Añadiremos o retiraremos plataforma según sus políticas cambien."}</p>
            
          </div>
          </section>
          



    
      </main>
      
      </div>
    
    </form>
  );
};

export default Home;