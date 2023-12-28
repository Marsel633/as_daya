import { Card, Layout } from "../../components";
import styles from "./HomePage.module.scss";
import { useState } from "react";
import {
  ChinaArray,
  EuropeArray,
  JapanArray,
  TurkeyArray,
  UsaArray,
  categories,
} from "../../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("USA");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOk = () => {
    setIsModalOpen(false);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const sidebarWidth = openSidebar ? "activeMenu" : "inactiveMenu";
  const contentWidth = openSidebar ? "hiddenWidth" : "fullWidth";
  console.log(UsaArray);
  return (
    <Layout>
      <section className={styles.home}>
        <div className={`${styles.home__wrapper} container`}>
          <aside className={`${styles.sidebar} ${styles[sidebarWidth]}`}>
            <button className={styles.toggleBtn} onClick={toggleSidebar}>
              <RxHamburgerMenu size="100%"/>
            </button>
            {categories.map((item) => (
              <button
                onClick={() => setSelectedCategory(item.title)}
                className={styles.categoriesBtn}
                key={item.id}
              >
                <span className={styles.categories__icon}>{item.icon}</span>
                {openSidebar ? <span>{item.title}</span> : null}
              </button>
            ))}
          </aside>
          <div className={`${styles.home__content} ${styles[contentWidth]}`}>
            {selectedCategory === "USA" && <Card brandArray={UsaArray} />}
            {selectedCategory === "Turkey" && <Card brandArray={TurkeyArray} />}
            {selectedCategory === "Japan" && <Card brandArray={JapanArray} />}
            {selectedCategory === "Europe" && (
              <Modal
                title="Инструкция по переходу на европейские сайты"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>1. Если у вас при входе на сайт выходит ошибка, вам нужно скачать VPN. (Установите любое приложение VPN, такое как <Link style={{color: "#1890ff"}} to={'https://www.wirevpn.app/ru'} target="_blank">Wirevpn</Link> и включите его.)</p>
                <p>Если у вас уже есть VPN на смартфоне, активируйте его.</p>
                <p>2. Выберите желаемую ссылку:</p>
                <p>Кликните на интересующую вас ссылку для перехода на соответствующий сайт.</p>
                <p>3. Примечание о VPN:</p>
                <p>Убедитесь, что VPN подключен и работает стабильно перед переходом.</p>
                <p>4. Будьте внимательны:</p>
                <p>Некоторые сайты могут требовать дополнительных настроек или регистрации.</p>
                <p>5. Завершение использования:</p>
                <p>После завершения посещения сайта, выключите VPN для экономии ресурсов.</p>
              </Modal>
            )}
            {selectedCategory === "Europe" && !isModalOpen && <Card brandArray={EuropeArray} />}
            {selectedCategory === "China" && <Card brandArray={ChinaArray} />}
          </div>
        </div>
      </section>
    </Layout>
  );
};
