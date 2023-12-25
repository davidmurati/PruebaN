import { useState, useEffect  } from 'react'
import './Login.css';
import logoN from './neurofy2.png';
import { createClient } from '@supabase/supabase-js'
import EfectoEscritura from "../Efectos/EfectoEscritura.jsx";



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
                                import.meta.env.VITE_APP_SUPABASE_ANON_KEY);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    


    try {
        const result = await supabase.auth.signInWithPassword({email: email, password:"si"});
        console.log(result)
        
        if (result.error==null) {
        window.location.href = '/qwdjaoeascaosdfaadfjaenfladnfkjandfkanfadjasdnjflankdanfkldasnfjdlasascaeqsk';
        }
      

    } catch (error) {
        console.error(error);
        alert('No ha podido ingresar');
    }



  };

  const TextoSubTitulo = "Correo electrónico:"

  return (
    
    <form onSubmit={handleSubmit}>

    
    <div className="card3">
    
    <div className="logo-container">
        <img src={logoN} className="App-logo" alt="logo" />
      </div>

      <div className="card">
      
      <div className="card2">
      <h4>{"Acceso a las IA disponibles de lenguaje de procesamiento natural sin nececidad de VPN"}</h4>
      </div>

      <div className="card2">
      

        <label>
          <p>
            {"Introduce tu correo si estas registrado sino puedes acceder comunicate con el administrador"}
          </p>
          
        <p>
        <EfectoEscritura
        text={TextoSubTitulo}
        mleftInicial={700}
        transitionTime={2}
        tickCambioletra={500}
        randCar={null} />
        </p>
        </label>

        </div>
        <div className="card2">
        <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

      <div className="card2">
      <button className="boton" type="submit">Iniciar</button  >
      </div> 

      </div> 
      
      </div>
    

    </form>
    
  );

}


export default Login