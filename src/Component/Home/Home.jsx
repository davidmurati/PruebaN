import { useState, useEffect  } from 'react'
import "./Home.css";
import logoN from '../Login/logoN.png'; 
import Select from 'react-select'
import llama2 from './llama2.png';
import llama3 from './llama3.jpg';

import { createClient } from '@supabase/supabase-js'


const Home = () => {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [option, setOption] = useState('');

const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY);

const options = [
    { value: 'You', label: 'You' },
    { value: 'Perplexity', label: 'Perplexity' },
    { value: 'OpenA', label: 'OpenA' },
    { value: 'GoogleBar', label: 'GoogleBar' },
    { value: 'Llama2', label: 'Llama2' },
    { value: 'CodeLlama', label: 'CodeLlama' },
    { value: 'ChatPDF', label: 'ChatPDF' },
    { value: 'GPT', label: 'GPT' },
    { value: 'ChatPDF2', label: 'ChatPDF2'},
    {value: 'GPTnbx', label: 'GPTnbx' ,
   }
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
         
      }else if (option==="ChatPDF2") {
        window.location.href = 'https://chatwithpdf.ai/';

      }else if (option==="GPTnbx") {
          window.location.href = 'https://chat.nbox.ai/';
         
      }else {
        contador=o;
        alert("No selecciono ninguna de las alternativas");
      }


  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        window.location.href = "/";
        
      } else {
        
      }
    });
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
        <h2>IA sin necesidad de VPN</h2>
        
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
            <h3>{"IA Disponible:"}</h3>

            <Select options={options} 
             onChange={(e) => find(e)}/>
      
      </div>
            </div>

            <div className="card5">
            <button className="boton" type="submit">Enviar</button  >
            </div>

            <p>{"Cada una de las alternativas son organizaciones que pueden cambiar sus políticas de uso. Añadiremos o retiraremos plataforma según sus políticas cambien."}</p>
            
          </div>

          <div className="card8">
            
            <h3>{"Informacion basica de uso"}</h3>

            <div className="card9">

            <div className="card6">
              
            <p>{"‣Seleccione You, perplexity o Bard si desea usar IA para generar información con referencias de internet 🌎"}</p>
            <p>{"‣Seleccione Codellama, GPTnbx o llama 2 para generar texto o solucionar tareas con el uso de IA 🔮"}</p>
            <p>{"‣Cuando ingrese seleccione el modelo llama2, CodeLLama o ChatGPT3.5 segun sea el caso 😎"}</p>
            <p>{"‣Seleccione chatPDF o chatPDF2 para usar busqueda semantica en textos que suba en dichas plataformas 📝"}</p>
            
            </div>

            <div className="logo-container2">
              <img src={llama3} className="App-logo2" alt="logo" />
        
            </div>

            </div>
          
          </div>



          </section>
          

            <div className="card8">
            
            <h3>{"Trucos para mejorar su interacción con los generadores de texto"}</h3>

            <div className="card9">

            <div className="card6">
              
            <p>{"‣Estructura sugerida: al hacer la pregunta de un [Rol] [Contexto] [Instrucción] [Datos de entrada] [Indicador de salida]"}</p>
            <p>{"⚠ No es obligatorio usar todos los items. Solo use los que crea conveniente para resolver su tarea."}</p>
            <p>{"Ejemplo: "}</p>
            <p>{"Eres un profesor de matemáticas, estas explicándole a niños de 5 grado. Realiza ejercicios de ejemplo de suma aplicando propiedad asociativa."}</p>
            <p>{"‣Para las tareas que requieran lógica o matemática puede mejorar la salida si pida que respire profundo 🧘‍♀️ y que lo haga paso a paso."}</p>
            <p>{"‣Para algunas actividades puede dar ejemplos 👨‍🏫 antes de pedir que realice la actividad."}</p>
            <p>{"‣Puede generar tablas 📊 usando GTPnbx."}</p>
            
            </div>

            <div className="logo-container2">
              <img src={llama2} className="App-logo2" alt="logo" />
        
            </div>

            </div>
          
          </div>

    
      </main>

      
      </div>
    
    </form>
  );
};

export default Home;