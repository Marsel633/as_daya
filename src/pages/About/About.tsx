import myImg from "../../assets/asd.png";
import { Layout } from "../../components";
import { aboutMeArray } from "../../constants/constants";
import styles from "./About.module.scss"

export const About = () => {
  return (
    <Layout>
        <section className={styles.about}>
          <div className="container center">
              <h1>Привет 🖐, давай знакомиться! Меня зовут <span>Даяна</span></h1>
              <div className={styles.about__myImage}><div className={styles.about__myImage_back}></div><img src={myImg} alt="my photo" /></div>
              <div className={styles.about__content}>
                {aboutMeArray.map(text => (
                    <p>{text}</p>
                ))}
              </div>
          </div>
        </section>
    </Layout>
  );
};
