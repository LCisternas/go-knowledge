import React from 'react';
import Layout from '../components/Layout';
import style from '../styles/HelpOnline.module.css';

const HelpOnline = () => {
  return (
    <Layout>
      <div className={style.helpHero}>
        <div className={style.contentHero}>
          <h1>
            Aqui te ayudamos a solucionar tus incidentes
          </h1>
          <h2>Aqui podras encontrar guias y manuales de uso</h2>
        </div>
      </div>
    </Layout>
  );
}
 
export default HelpOnline;