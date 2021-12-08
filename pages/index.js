import Layout from "../components/Layout"
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={style.homeHero}>
        <div className={style.homeContent}>
          <h1>Go-Knowledge</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis sapien nec odio accumsan sodales.
          Aliquam eu arcu in massa efficitur sagittis nec et sem. Proin efficitur ullamcorper neque, sed fringilla augue malesuada at. Sed rhoncus turpis purus, suscipit iaculis lacus laoreet eget.
          Nunc mollis tortor at nibh vestibulum, id rhoncus risus vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin mollis eget arcu vel dapibus.</p>
        </div>
        <div className={style.homeMedia}>
          <div className={style.homeOnboard} >
            <div className={style.contentCard}>
              <h1>Onboarding</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={style.homeAcademy} >
            <div className={style.contentCard}>
              <h1>Academy</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={style.homePodcast} >
            <div className={style.contentCard}>
              <h1>Podcast</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
