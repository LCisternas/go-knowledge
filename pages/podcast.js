import React from 'react';
import Layout from '../components/Layout';
import style from '../styles/Podcast.module.css';

const Podcast = () => {
  return (
    <Layout>
      <div className={style.podcastHero}>
        <div className={style.contentHero}>
          <h1>
            ¡Bienvenido a Podcast GoSCM!
          </h1>
          <p>Escucha sobre casos de exito, lecciones aprendidas y buenas practicas</p>
        </div>
      </div>
    </Layout>
  );
}
 
export default Podcast;