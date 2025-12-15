import { useState, useEffect } from 'react';
import "./Home.css";
import logoN from '../Login/neurofy2.png';
import Select from 'react-select';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import noticia1 from './duckduckgo2.png';
import noticia2 from './removebg.jpeg';
import noticia3 from './claude.jpeg';
import noticia4 from './pezargento.jpeg';
import noticia5 from './Noticia5.png';
import llama7 from './Neurofy3.png';
import llama9 from './Neurofy2.png';
import llama17 from './Neurofy1.png';
import EfectoDesencriptarTexto from "../Efectos/EfectoDesencriptarTexto.jsx";
import Card from "../Card1/cardss.jsx";
import Card2 from "../Card1/cardss2.jsx";
import { createClient } from '@supabase/supabase-js';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    const [option, setOption] = useState('');
    const [linkOption, setLinkOption] = useState('');
    const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_ANON_KEY);

    const options = [
        { value: 'You', label: 'You' },
        { value: 'Perplexity', label: 'Perplexity' },
        { value: 'txyz', label: 'txyz' },
        { value: 'Copilot', label: 'Copilot' },
        { value: 'Mistral', label: 'Mistral' },
        { value: 'Gemini', label: 'Gemini' },
        { value: 'Groq', label: 'Groq' },
        { value: 'CodeLlama', label: 'CodeLlama' },
        { value: 'ChatPDF', label: 'ChatPDF' },
        { value: 'Inflection', label: 'Inflection' },
        { value: 'Grok', label: 'Grok' },
        { value: 'deepseek', label: 'deepseek' },
        { value: 'Qwen', label: 'Qwen' },
        { value: 'Minimax', label: 'Minimax' },
        { value: 'Kimi', label: 'Kimi' },
        { value: 'Gemini2.5 (solo PC)', label: 'Gemini2.5 (solo PC)' },
    ];

    const linkOptions = [
        { value: 'labs.google', label: 'labs google Genera imagenes y musica instrumental', url: 'https://labs.google/fx/es' },
        { value: 'Notebooklm', label: 'Notebooklm (Interactua con tu video o texto)', url: 'https://notebooklm.google.com/' },
        { value: 'Turboscribe', label: 'Transcriptor de audio (Turboscribe)', url: 'https://turboscribe.ai/' },
        { value: 'Leonardo', label: 'Generador de imagen (Leonardo)', url: 'https://app.leonardo.ai/' },
        { value: 'Playground', label: 'Generador de imagen (Playground)', url: 'https://playground.com/' },
        { value: 'Ideogram', label: 'Generador de imagen con texto (Ideogram)', url: 'https://ideogram.ai/t/explore' },
        { value: 'character', label: 'Chat con personajes IA (character.ai)', url: 'https://character.ai/' },
        { value: 'Udio', label: 'Generador de música (Udio)', url: 'https://www.udio.com/' },
        { value: 'Suno', label: 'Generador de música (Suno)', url: 'https://suno.com/' },
        { value: 'Elevenlabs', label: 'Generador Voz', url: 'https://elevenlabs.io/' },
        { value: 'Ollama', label: 'Ollama', url: 'https://ollama.com/search' },
        { value: 'Openrouter', label: 'Openrouter', url: 'https://openrouter.ai/' },
        { value: 'Gamma', label: 'Generador de presentaciones (Gamma)', url: 'https://gamma.app/create' },
        { value: 'dewatermark', label: 'Quitar marca de agua', url: 'https://dewatermark.ai/es' },
        { value: 'remove.bg', label: 'Quitar fondo de imagen', url: 'https://www.remove.bg/es/upload' },
        { value: 'kling ai', label: 'Modificar Video', url: 'https://app.klingai.com/global/omni/new' },
        { value: 'movieflow', label: 'Generar video', url: 'https://movieflow.ai/' },
        { value: 'Narrar Google', label: 'Generar audio narrado', url: 'https://aistudio.google.com/app/generate-speech' },
        { value: 'mermaid.js.org', label: 'Generar mapa conceptual (Con codigo)', url: 'https://mermaid.js.org/syntax/flowchart.html' },
        { value: 'Medlm', label: 'Medlm', url: 'https://www.openevidence.com/' }
    ];

    useEffect(() => {
        // Lógica de autenticación (si es necesaria)
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (option==="You") {
            window.location.href = 'https://you.com/search?q=';
            
          } else if (option==="Perplexity") {
            window.location.href = 'https://www.perplexity.ai/?q=';
    
          } else if (option==="txyz") {
            window.location.href = 'https://app.txyz.ai/';
    
          }else if (option==="Copilot") {
            window.location.href = 'https://copilot.microsoft.com/';
            
            
          }  else if (option==="Mistral") {
            window.location.href = 'https://chat.mistral.ai/chat';
             
          }else if (option==="Gemini") {
            window.location.href = 'https://bard.google.com/?hl=es';
             
          }else if (option==="Groq") {
            "window.location.href = 'https://www.llama2.ai/';"
            window.location.href = 'https://console.groq.com/playground';
             
          }else if (option==="CodeLlama") {
            window.location.href = 'https://labs.perplexity.ai/';
             
          }else if (option==="ChatPDF") {
            window.location.href = 'https://chatwithpdf.ai/';
             
          }else if (option==="GPT") {
            window.location.href = 'https://gpt.h2o.ai/?hp=chat&utm_source=h2o.ai&utm_medium=referral&utm_campaign=h2o-home-page-plg&_ga=2.2391152.1734232450.1694226193-377963146.1693494970';
    
          }  else if (option==="OpenA") {
            window.location.href = 'https://open-assistant.io/dashboard';
    
          }else if (option==="Grok") {
              window.location.href = 'https://grok.com/';
             
          }else if (option==="Inflection") {
            window.location.href = 'https://pi.ai/discover';
  
          }else if (option==="deepseek") {
              window.location.href = 'https://www.deepseek.com/';

            }else if (option==="Qwen") {
                window.location.href = 'https://chat.qwenlm.ai/';

            }else if (option==="Minimax") {
                window.location.href = 'https://chat.minimax.io/';

            }else if (option==="Kimi") {
                window.location.href = 'https://www.kimi.com/';
    
          }else if (option==="Gemini2.5 (solo PC)") {
            window.location.href = 'https://aistudio.google.com/app/prompts/new_chat';
           
        }else {
            contador=o;
            alert("No selecciono ninguna de las alternativas");
          }
        };

    const handleLinkChange = (selectedLink) => {
        setLinkOption(selectedLink);
        if (selectedLink) {
            window.open(selectedLink.url, '_blank');
        }
    };

    const cards = [
        {
            id: 1,
            title: "Generador de texto",
            text: "Dirígete a Codellama, Deepseek o similares para solucionar tareas. Selecciona el modelo a usar según sea el caso 😎",
            image: llama9,
        },
        {
            id: 2,
            title: "Buscador Web con IA",
            text: "Selecciona You, Perplexity, Copilot de Microsoft o Gemini si deseas usar IA para generar información con referencias de internet 🌎",
            image: llama7,
        },
        {
            id: 3,
            title: "Búsqueda semántica",
            text: "Selecciona ChatPDF o ChatPDF2 para usar búsqueda semántica en tus textos 📝",
            image: llama17,
        },
    ];

    const cards2 = [
        {
            id: 1,
            title: "Trucos para mejorar tu interacción con los generadores de texto",
            text: "Estructura sugerida: [Rol] [Contexto] [Instrucción] [Datos de entrada] [Indicador de salida]",
            text2: "🟡 No es obligatorio usar todos los ítems. Usa los que creas convenientes.",
            text3: "Ejemplo: Eres un profesor de matemáticas explicando a niños de quinto grado.",
            text4: "Para mejorar la salida, pide que respire profundo 🧘‍♀️ y haga las cosas paso a paso.",
            text5: "Para algunas actividades, ofrece ejemplos 👨‍🏫 antes de pedir la tarea.",
            text6: "Puedes generar tablas 📊 usando GTPnbx.",
        },
    ];

    const cards3 = [
        {
            id: 1,
            title: "Evita la censura",
            text: "Utiliza navegadores y plataformas centrados en la privacidad, como Tor o DuckDuckGo, que integran VPNs y protegen activamente tu información personal. Estas herramientas están diseñadas para priorizar tu seguridad en línea y mantener tu privacidad en todo momento.",
            image: noticia1,
        },
        {
            id: 2,
            title: "Portal de Noticias de IA",
            text: (
                <>
                    Actualízate en los desarrollos, implementaciones, modelos y todo lo que tiene que ver con el mundo del machine learning en el portal deeplearning.ia que se encuentra en el siguiente enlace:{" "}
                    <a href="https://www.deeplearning.ai/the-batch/" target="_blank" rel="noopener noreferrer">
                        Noticias IA
                    </a>.
                </>
            ),
            image: noticia5,
        },
        {
            id: 3,
            title: "Recomendación para tratar imágenes",
            text: "Quieres mejorar la resolución de tus imágenes busca pixelcut.ai la cual te ayuda a aumentar la resolución en segundos y si lo que quieres es quitar el fondo usa remove.bg",
            image: noticia2,
        },
        {
            id: 4,
            title: "Artifacts de Claude",
            text: "Artifacts de Claude permite generar programas con tan solo una descripción. Para ingresar tienes que hacer uso de buscadores como el de Duck Duck Go o usar VPN seguras. Es una herramienta muy útil si necesitas un programa rápido que haga una tarea específica.",
            image: noticia3,
        },
        {
            id: 5,
            title: "Pez Argento en character.ai",
            text: (
                <>
                    ¿Algo te incomoda y quieres hablar? Habla con el Pez Argento, amigo de Coraje. Seguro te dará un gran consejo. Puedes hablar con él en este enlace:{" "}
                    <a href="https://character.ai/chat/qfT15B9lrHeRHYN0eK0dLKMPwc4d6qLV0AH8yDJh3-A" target="_blank" rel="noopener noreferrer">
                        Pez Argento en character.ai
                    </a>.
                </>
            ),
            image: noticia4,
        },
    ];

    const privacyPolicies = [
        {
            platform: "OpenAI 10-1-2025 ",
            description: "Los usuarios conservan los derechos del input y son propietarios del output, pero OpenAI puede utilizar el contenido para mejorar servicios. Opt-out disponible para entrenamiento. Recopilación de datos incluye input, output, uso y métricas técnicas."
        },
        {
            platform: "Anthropic 10-1-2025 ",
            description: "Los usuarios son responsables de su input y output. Anthropic asigna derechos de los outputs al usuario. No se utiliza el contenido para entrenamiento, salvo consentimiento o revisión de seguridad. Recopila datos proporcionados por el usuario y feedback."
        },
        {
            platform: "Microsoft Copilot 10-1-2025 ",
            description: "Los usuarios son responsables de inputs y outputs, que pueden usarse para mejorar servicios. Existen planes pagos para NO usar información organizacional para entrenar modelos."
        },
        {
            platform: "DeepSeek 10-1-2025 ",
            description: "Los usuarios conservan la propiedad de sus datos y outputs y deben garantizar que no violan la ley. TODA la información cargada puede utilizar datos para mejorar los modelos y servicio. Usa datos en contextos definidos, respetando acuerdos legales."
        },
        {
            platform: "Mistral AI 10-1-2025 ",
            description: "Los usuarios conservan la propiedad de sus datos y outputs, pero deben garantizar que no violan la ley. No usa la información cargada ni la generada para entrenar modelos sin aviso."
            
        },
        {
            platform: "Google 10-1-2025 ",
            description: "Los usuarios conservan la propiedad del contenido, pero Google puede usarlo para mejorar servicios. Uso para Entrenamiento: Utiliza contenido para personalizar y mejorar servicios. Recopilación de Datos: Recopila datos de uso, feedback, input y output, respetando la privacidad y limitaciones legales."
        },
        {
            platform: "Recomendación",
            description: "Se recomienda revisar y leer completo los términos y condiciones de todos los modelos que uses y monitorear si puedes usarlo bajo sus condiciones."
        }
    ];

    return (
        <div className="home-container">
            <header className="header">
                <Navbar />
                <img src={logoN} className="App-logo" alt="logo" />
                <h3>IA SIN NECESIDAD</h3>
                <EfectoDesencriptarTexto
                    text="DE VPN"
                    mleftInicial={700}
                    transitionTime={2}
                    tickCambioletra={500}
                    randCar={null}
                />
            </header>

            <main className="main-content">
                <section className="card3" id="Inicio">
                    <form onSubmit={handleSubmit} className="form">
                        <h4>Selecciona la plataforma con la que quieres consultar</h4>
                        <Select
                            options={options}
                            onChange={(e) => setOption(e.value)}
                            className="select"
                            placeholder="Elige una opción"
                        />
                        <button type="boton" className="submit-button">Enviar</button>
                        
                        <h6>Herramientas adicionales:</h6>
                        <Select
                            options={linkOptions}
                            onChange={handleLinkChange}
                            className="select"
                            placeholder="Elige una herramienta"
                        />
                        
                    <p>Cada una de las alternativas puede cambiar sus políticas de uso.</p>
                    </form>
                    
                </section>

                <h4>Políticas de Privacidad</h4>
                <div className="card" id="Politicas">
                    <Carousel className="carousel">
                        {privacyPolicies.map((policy, index) => (
                            <div key={index} className="carousel">
                                <h5>{policy.platform}</h5>
                                <p>{policy.description}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <section className="card2" id="TiposIA">
                    <h4>Tipos de IA disponibles</h4>
                    <Carousel className="carousel">
                        {cards.map(({ id, title, text, image }) => (
                            <Card key={id} imageSource={image} title={title} text={text} />
                        ))}
                    </Carousel>
                </section>

                <div className="card2" > 
                <h4>Mejora tu experiencia</h4>
                {cards2.map(({ id, title, text, text2, text3, text4, text5, text6 }) => (
                    <Card2 key={id} title={title} text={text} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6} />
                ))}
               </div>


                
                <section className="card2" id="Noticias">
                    <h4>Recursos y noticias</h4>
                    <Carousel className="carousel">
                    {cards3.map(({ id, title, text, image }) => (
                        <Card key={id} imageSource={image} title={title} text={text} />
                    ))}
                    </Carousel>
                </section>
                
                
            </main>
           
            <Footer />
            
        </div>
    );
};

export default Home;