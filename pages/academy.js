import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

import style from '../styles/Academy.module.css';
import AboutImage from '../images/imagen2.png';
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
          <h1>What is Go-knowledge Academy?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida leo sed ullamcorper porta. Phasellus sollicitudin at massa eget viverra. Maecenas in enim at lacus condimentum aliquet faucibus sed velit. Cras viverra fringilla orci, at rutrum ex hendrerit id. Maecenas dignissim, sem posuere gravida auctor, nibh lorem volutpat quam, eget sollicitudin lectus eros a velit. Phasellus accumsan risus eget viverra maximus. Nunc tincidunt rutrum dolor, in iaculis turpis lobortis at. Curabitur aliquet rutrum ullamcorper. In in lacus congue, gravida ante et, condimentum nisi. Suspendisse a vulputate arcu, at luctus elit. Fusce in rhoncus eros.</p>
        </div>
        <div className={style.aboutImage}>
          <Image src={AboutImage} width={600} height={350} />
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