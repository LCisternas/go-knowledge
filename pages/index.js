import Layout from "../components/Layout"
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={style.homeHero}>
        <div className={style.homeContent}>
          <h1>Go-Knowledge</h1>
          <p>Bienvenido a nuestra plataforma...</p>
        </div>
        <div className={style.homeMedia}>
          <div className={style.homeOnboard} >
            <div className={style.contentCard}>
              <h1>Onboarding</h1>
              <p>Bienvenidos a Go-Guys...</p>
            </div>
          </div>
          <div className={style.homeAcademy} >
            <div className={style.contentCard}>
              <h1>Academy</h1>
              <p>Certificaciones IBP...</p>
            </div>
          </div>
          <div className={style.homePodcast} >
            <div className={style.contentCard}>
              <h1>Podcast</h1>
              <p>Testimonios de nuestros clientes...</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
