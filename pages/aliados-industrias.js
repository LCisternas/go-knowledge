import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import style from '../styles/Aliado.module.css';

import a1 from '../images/aliado1.png';
import a2 from '../images/aliado2.png';
import a3 from '../images/aliado3.png';
import a4 from '../images/aliado4.png';
import a5 from '../images/aliado5.png';
import a6 from '../images/aliado6.png';
import a7 from '../images/aliado7.png';
import a8 from '../images/aliado8.png';
import a9 from '../images/aliado9.png';
import a10 from '../images/aliado10.png';
import a11 from '../images/aliado11.jpg';

const Aliados = () => {
  return (
    <Layout>
      <div className={style.AliadoHero}>
        <div className={style.contentHero}>
          <h1>
            ¡Aliados GoSCM!
          </h1>
          <p>Conoce a todos nuestros aliados y las diversas industrias en las que trabajamos</p>
        </div>
        
        <div className={style.aliados}>
          <div className={style.aboutAliado}>
            <h1>¿Que significa ser Aliado en GoSCM?</h1>
            <p>Como aliado, puedes ser parte de la cuarta revolución industrial. Podrás empujar la transformación digital de tu empresa a través del uso de los datos y la inteligencia artificial. Siempre asesorados por nuestra amplia experiencia en diversas industrias</p>
          </div>
          {/* <div className={style.industrias}>
            <h1>Industrias en las que trabajamos</h1>
          </div> */}
          <h1 className={style.aliadosTitle}>Nuestros Aliados</h1>
          <div className={style.imagenes}>
            <div className={style.card}>
              <Image src={a1} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a2} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a3} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a4} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a5} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a6} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a7} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a8} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a9} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a10} alt='aliado img' />
            </div>
            <div className={style.card}>
              <Image src={a11} alt='aliado img' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Aliados;