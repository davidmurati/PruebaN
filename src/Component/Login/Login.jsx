import { useState, useEffect  } from 'react'
import './Login.css';
import logoN from './logoN.png';
import { createClient } from '@supabase/supabase-js'



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
        window.location.href = '/Home';
        }
      

    } catch (error) {
        console.error(error);
        alert('No ha podido ingresar');
    }



  };

  

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
        <p>{"Introduce tu correo si estas registrado sino puedes acceder comunicate con el administrador"}</p>
        <label>
        Correo electrónico:
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