import { Steps } from "antd";
import { Layout } from "../../components";
import styles from "./Contact.module.scss";
import { useState } from "react";
import { howToOrderMessages } from "../../constants";

export const Contact = () => {
    const [current, setCurrent] = useState<number>(0)
const onChange = (value:number) => {
    setCurrent(value);
}
  return (
    <Layout>
      <section className={styles.contact}>
        <div className="container center">
          <h1>Контакты</h1>
         <div className={styles.contact__content}>
              <div className={styles.contact__howToOrder}>
                <Steps
                  current={current}
                  onChange={onChange}
                  direction="vertical"
                  items={howToOrderMessages}
                />
              </div>
              <div className={styles.contact__socials}>
                <div className={styles.socials__whatsapp}>
                    Напишите мне на <span>WhatsApp</span>
                </div>
                <div className={styles.socials__whatsapp}>
                    Напишите мне в <span>Instagram</span>
                </div>
                <div className={styles.socials__whatsapp}>
                    Напишите мне на <span>WhatsApp</span>
                </div>
              </div>
         </div>
        </div>
      </section>
    </Layout>
  );
};
