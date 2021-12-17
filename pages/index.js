import Layout from "../components/Layout"
import Link from "next/link";
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={style.homeHero}>
        <div className={style.homeContent}>
          <h1>Go-Knowledge</h1>
          <p>Bienvenido a nuestra plataforma de aprendizaje</p>
        </div>
        
        <div className={style.homeMedia}>
          <Link href='/onboard'>
            <div className={style.homeOnboard} >
              <div className={style.contentCard}>
                <h1>Onboarding</h1>
                <p>Bienvenidos a Go-Guys</p><br />
                <p>Su experiencia en Go comienza aquí</p>
              </div>
            </div>
          </Link>

          <Link href='/academy'>
            <div className={style.homeAcademy} >
              <div className={style.contentCard}>
                <h1>Academy</h1>
                <p>Cursos y certificaciones de los modulos IBP</p>
              </div>
            </div>
          </Link>

          <Link href='/podcast'>
            <div className={style.homePodcast} >
              <div className={style.contentCard}>
                <h1>Podcast</h1>
                <p>Historias de exito y referentes en Go</p>
              </div>
            </div>
          </Link>

          <Link href='/help-online'>
            <div className={style.homeHelp} >
              <div className={style.contentCard}>
                <h1>¡Help!</h1>
                <p>Te ayudamos a solucionar tus problemas</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
