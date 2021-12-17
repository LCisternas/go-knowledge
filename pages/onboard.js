import React from 'react';
import Layout from '../components/Layout';
import style from '../styles/Onboard.module.css';

const Onboard = () => {
  return (
    <Layout>
      <div className={style.onboardHero}>
        <div className={style.contentHero}>
          <h1>
            ¡Bienvenido a GoSCM!
          </h1>
          <h2>Tu carrera comienza aqui</h2>
        </div>
        
        <div className={style.loginForm}>
          <form>
            <h1>Login</h1>
            <input 
              type='text'
              placeholder='Nombre de usuario'
            />
            <input 
              type='password'
              placeholder='Contraseña'
            />
            <button
              type='button'
            >Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
 
export default Onboard;