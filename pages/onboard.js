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
      </div>
    </Layout>
  );
}
 
export default Onboard;