import { Steps } from "antd";
import { Footer, Layout } from "../../components";
import styles from "./Contact.module.scss";
import { useState } from "react";
import { howToOrderMessages } from "../../constants";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [current, setCurrent] = useState<number>(0);
  const onChange = (value: number) => {
    setCurrent(value);
  };
  return (
    <Layout>
      <section className={`${styles.contact} container center`}>
          <div className={styles.contact__content}>
            <div className={styles.contact__howToOrder}>
              <h3>Как заказать?</h3>
              <Steps
                current={current}
                onChange={onChange}
                direction="vertical"
                items={howToOrderMessages}
              />
            </div>
            <div className={`${styles.contact__socials} center`}>
              <Link to={('https://api.whatsapp.com/send/?phone=996508077727&text&type=phone_number&app_absent=0')} target="_blank" className={styles.socials__whatsapp}>
                <FaWhatsapp />
                <span>WhatsApp</span>
              </Link>
              <Link to={('https://www.instagram.com/as__daya/')} target="_blank" className={styles.socials__instagram}>
                <FaInstagram />
                <span>Instagram</span>
              </Link>
              <Link to={('https://t.me/daiana94')} target="_blank" className={styles.socials__telegram}>
                <FaTelegram />
                <span>Telegram</span>
              </Link>
            </div>
          </div>
          <Footer/>
      </section>
    </Layout>
  );
};
