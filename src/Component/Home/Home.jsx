import { useState, useEffect  } from 'react'
import "./Home.css";
import logoN from '../Login/neurofy2.png'; 
import Select from 'react-select'
import llama2 from './llama2.png';
import llama7 from './llama7.jpg';
import llama12 from './llama12.jpg';
import llama14 from './llama14.png';
import EfectoDesencriptarTexto from "../Efectos/EfectoDesencriptarTexto.jsx";
import Card from "../Card1/cardss.jsx";
import Card2 from "../Card1/cardss2.jsx";

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
    { value: 'Copilot', label: 'Copilot' },
    { value: 'Gray Matter', label: 'Gray Matter' },
    { value: 'GoogleBar', label: 'GoogleBar' },
    { value: 'Llama2', label: 'Llama2' },
    { value: 'CodeLlama', label: 'CodeLlama' },
    { value: 'ChatPDF', label: 'ChatPDF' },
    { value: 'GPT', label: 'GPT' },
    { value: 'ChatPDF2', label: 'ChatPDF2'},
    { value: 'OpenA', label: 'OpenA' },
    {value: 'GPTnbx', label: 'GPTnbx' ,
   }
  ]


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (option==="You") {
        window.location.href = 'https://you.com/search?q=';
        
      } else if (option==="Perplexity") {
        window.location.href = 'https://www.perplexity.ai/?q=';

      } else if (option==="Copilot") {
        window.location.href = 'https://copilot.microsoft.com/';
        
        
      }  else if (option==="Gray Matter") {
        window.location.href = 'https://front-med3.vercel.app/';
         
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

      }  else if (option==="OpenA") {
        window.location.href = 'https://open-assistant.io/dashboard';

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

  const TextoSubTitulo = "IA sin necesidad de VPN"


  const cards = [
    {
      id: 1,
      title: "Generador de texto",
      text: "Seleccione Codellama, GPTnbx, Gray Matter o llama 2 para solucionar tareas. Segun sea el caso, cuando ingrese seleccione el modelo llama2, CodeLLama o ChatGPT3.5 😎",
      image: llama12,
      
    },
    {
      id: 2,
      title: "Buscador Web con IA",
      text: ""+"Seleccione You, perplexity, copilot de microsoft o Bard si desea usar IA para generar información con referencias de internet 🌎",
      image: llama2,
      
    },
    {
      id: 3,
      title: "Busqueda semantica",
      text: " Seleccione chatPDF o chatPDF2 para usar busqueda semantica en sus textos 📝" ,
      image: llama14,
      
    },
  ];

  const cards2 = [
    {
      id: 1,
      title: "Trucos para mejorar su interacción con los generadores de texto",
      text: "Estructura sugerida: al hacer la pregunta de un [Rol] [Contexto] [Instrucción] [Datos de entrada] [Indicador de salida]",
      text2: "🟡 No es obligatorio usar todos los items. Solo use los que crea conveniente para resolver su tarea.",
      text3: "Ejemplo: Eres un profesor de matemáticas, estas explicándole a niños de quinto grado. Realiza ejercicios de ejemplo de suma aplicando propiedad asociativa.",
      text4: "Para obtener respuestas que requieran lógica o operaciones matemática puede mejorar la salida si pida que respire profundo 🧘‍♀️ y que lo haga paso a paso.",
      text5: "Para algunas actividades puede dar ejemplos 👨‍🏫 antes de pedir que realice la actividad.",
      text6: "Puede generar tablas 📊 usando GTPnbx.",
      image: llama7,
      
    },
    
  ];

  
  return (

    <form onSubmit={handleSubmit}>
    <div>
     


      <div className="logo-container">
        <img src={logoN} className="App-logo" alt="logo" />
        
        </div>

        <div className="card3">
          <p>
          <EfectoDesencriptarTexto
          text={TextoSubTitulo}
          mleftInicial={700}
          transitionTime={2}
          tickCambioletra={500}
          randCar={null} />
          </p>
        
        </div>
        
        <main>

          

          <section id="listaE"> 

            <div className="card">
            
            <h4>{"Selecciona la plataforma con la que quieres consultar"}</h4>
            

            <div className="card6">
            <h6>{"IA Disponible:"}</h6>

            <div className="selector">

            <Select options={options} 
             onChange={(e) => find(e)}/>
            </div>

            </div>

            <div className="card5">
            <button className="boton" type="submit">Enviar</button  >
            </div>

            <p>{"Cada una de las alternativas son organizaciones que pueden cambiar sus políticas de uso. Añadiremos o retiraremos plataforma según sus políticas cambien."}</p>
            
          </div>

          <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards2.map(({ title, image, text, text2, text3, text4, text5, text6, id }) => (
                  <div className="card1" key={id}>
                    <Card2 imageSource={image} title={title} text={text} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}/>
                  </div>
                ))}
              </div>
            </div>

          </section>

    
      </main>

      
      </div>
    
    </form>
  );
};

export default Home;