import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

import style from '../styles/Academy.module.css';
import AboutImage from '../images/logoV2.png';
import aboutImage2 from '../images/academyimage.png';
import c1 from '../images/course1.jpg';
import c2 from '../images/course2.jpg';
import c3 from '../images/course3.jpg';
import c4 from '../images/course4.jpg';
import c5 from '../images/course5.jpg';
import c6 from '../images/course6.jpg';

const Academy = () => {
  return (
    <Layout>
      <div className={style.academyHero} >
        <div className={style.heroContent} >
          <h1>Go-Knowledge Academy!</h1>
          <h2>¡Aprende, certificate y crece!</h2>
        </div>
      </div>

      <div className={style.academyAbout}>
        <div className={style.aboutContent}>
          <Image src={aboutImage2} width={280} height={180} />
        </div>
        <div className={style.aboutImage}>
          <Image src={AboutImage} width={450} height={80} />
        </div>
      </div>

      <div className={style.academyCourses}>
        <h1>Cursos</h1>

        <div className={style.gridCourses}>
          <div className={style.courseCard}>
            <Image src={c1} />
            <div className={style.infoCard} >
              <h2>Modulo de demanda I</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>

          <div className={style.courseCard}>
            <Image src={c2} />
            <div className={style.infoCard}>
              <h2>Modulo de inventario I</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>

          <div className={style.courseCard}>
            <Image src={c3} />
            <div className={style.infoCard}>
              <h2>Modulo de supply I</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>

          <div className={style.courseCard}>
            <Image src={c4} />
            <div className={style.infoCard}>
              <h2>Modulo de demanda II</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>

          <div className={style.courseCard}>
            <Image src={c5} />
            <div className={style.infoCard}>
              <h2>Modulo de inventario II</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>
          
          <div className={style.courseCard}>
            <Image src={c6} />
            <div className={style.infoCard}>
              <h2>Modulo de supply II</h2>
              <button type='button'>Detalles</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Academy;