import React from 'react';
import Layout from '../components/Layout';
import style from '../styles/Onboard.module.css';

const Onboard = () => {
  return (
    <Layout>
      <div className={style.onboardHero}>
        <div className={style.contentHero}>
          <h1>
            Welcome to GO SCM<br />
            Your career begins here!
          </h1>
        </div>
      </div>
    </Layout>
  );
}
 
export default Onboard;