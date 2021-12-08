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
          <h2>Learn, certificate and grow</h2>
        </div>
      </div>
      <div className={style.academyAbout}>
        <div className={style.aboutContent}>
          <h1>What is Go-knowledge Academy?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque suscipit ligula sed rutrum. Nullam tincidunt erat nec tellus varius vestibulum. Mauris congue ullamcorper eros eu venenatis. Nullam tincidunt consectetur risus nec iaculis. Aenean mattis dui diam, ut rutrum orci rhoncus in. Morbi consectetur tempor dui, mattis tincidunt tortor accumsan vel. Sed suscipit varius dui, sit amet maximus nisl egestas vel. Nunc in suscipit libero, posuere egestas sem. Mauris lacus nulla, tincidunt ut libero sed, bibendum tristique tortor. Curabitur condimentum porttitor aliquam. Nam gravida, justo sit amet varius cursus, turpis elit facilisis sem, sed mollis purus turpis fringilla nisi. Curabitur euismod ligula ut tristique finibus. Ut eu velit erat. Cras bibendum finibus tortor ornare scelerisque. Aenean placerat ultricies elementum.</p>
        </div>
        <div className={style.aboutImage}>
          <Image src={AboutImage} width={600} height={350} />
        </div>
      </div>
      <div className={style.academyCourses}>
        <h1>Courses</h1>
        <div className={style.gridCourses}>
          <div className={style.courseCard}>
            <Image src={c1} width={400} height={400} />
            <h2>Course</h2>
          </div>
          <div className={style.courseCard}>
            <Image src={c2} width={400} height={400} />
            <h2>Course</h2>
          </div>
          <div className={style.courseCard}>
            <Image src={c3} width={400} height={400} />
            <h2>Course</h2>
          </div>
          <div className={style.courseCard}>
            <Image src={c4} width={400} height={400} />
            <h2>Course</h2>
          </div>
          <div className={style.courseCard}>
            <Image src={c5} width={400} height={400} />
            <h2>Course</h2>
          </div>
          <div className={style.courseCard}>
            <Image src={c6} width={400} height={400} />
            <h2>Course</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Academy;