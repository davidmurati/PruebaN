import { useState, useEffect } from 'react';
import "./Home.css";
import logoN from '../Login/neurofy2.png'; 
import Select from 'react-select';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import llama2 from './llama2.png';
import llama7 from './llama7.jpg';
import llama9 from './matrix4.jpeg';
import llama17 from './matrix5.jpeg';
import EfectoDesencriptarTexto from "../Efectos/EfectoDesencriptarTexto.jsx";
import Card from "../Card1/cardss.jsx";
import Card2 from "../Card1/cardss2.jsx";
import { createClient } from '@supabase/supabase-js';

const Home = () => {
    const [option, setOption] = useState('');
    const [linkOption, setLinkOption] = useState('');
    const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, import.meta.env.VITE_APP_SUPABASE_ANON_KEY);

    const options = [
        { value: 'You', label: 'You' },
        { value: 'Perplexity', label: 'Perplexity' },
        { value: 'Copilot', label: 'Copilot' },
        { value: 'Mistral', label: 'Mistral' },
        { value: 'Gemini', label: 'Gemini' },
        { value: 'Llama3', label: 'Llama3' },
        { value: 'CodeLlama', label: 'CodeLlama' },
        { value: 'ChatPDF', label: 'ChatPDF' },
        { value: 'ChatPDF2', label: 'ChatPDF2' },
        { value: 'Inflection', label: 'Inflection' },
        { value: 'GPTnbx', label: 'GPTnbx' },
        { value: 'Gemini1.5 (solo PC)', label: 'Gemini1.5 (solo PC)' }
    ];

    const linkOptions = [
        { value: 'LLAVA', label: 'Imagen a Texto (LLAVA)', url: 'https://llava.hliu.cc/' },
        { value: 'Leonardo', label: 'Generador de imagen (Leonardo)', url: 'https://app.leonardo.ai/' },
        { value: 'Ideogram', label: 'Generador de imagen con texto (Ideogram)', url: 'https://ideogram.ai/t/explore' },
        { value: 'Udio', label: 'Generador de música (Udio)', url: 'https://www.udio.com/' }
    ];

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                window.location.href = "/";
            }
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedOption = options.find(opt => opt.value === option);
        if (selectedOption) {
            window.location.href = selectedOption.url;
        } else {
            alert("No seleccionaste ninguna de las alternativas");
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
            text: "Dirígete a Codellama, GPTnbx o similares para solucionar tareas. Selecciona el modelo a usar según sea el caso 😎",
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

    return (
        <div className="home-container">
            <header className="header">
                <h5>NEUROFY</h5>
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
                <form onSubmit={handleSubmit} className="form">
                    <h4>Selecciona la plataforma con la que quieres consultar</h4>
                    <Select options={options} onChange={(e) => setOption(e.value)} className="select" />
                    <button type="submit" className="submit-button">Enviar</button>
                    <p>Cada una de las alternativas puede cambiar sus políticas de uso.</p>
                    <h6>Herramientas adicionales:</h6>
                    <Select options={linkOptions} onChange={handleLinkChange} className="select" />
                </form>

                <Carousel className="carousel">
                    {cards.map(({ id, title, text, image }) => (
                        <Card key={id} imageSource={image} title={title} text={text} />
                    ))}
                </Carousel>

                {cards2.map(({ id, title, text, text2, text3, text4, text5, text6 }) => (
                    <Card2 key={id} title={title} text={text} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6} />
                ))}
            </main>
            <p>
            <a href="https://www.camel-ai.org/agent" target="_blank" rel="noopener noreferrer">.</a>
            </p>
        </div>

    );
};

export default Home;