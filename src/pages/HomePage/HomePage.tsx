import { Card, Layout } from "../../components";
import styles from "./HomePage.module.scss";
import { useState } from "react";
import {
  ChinaArray,
  EuropeArray,
  JapanArray,
  KoreaArray,
  TurkeyArray,
  UsaArray,
  categories,
} from "../../constants";
import { RxHamburgerMenu } from "react-icons/rx";

export const HomePage = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("USA");
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const sidebarWidth = openSidebar ? "activeMenu" : "inactiveMenu";
  console.log(UsaArray);
  return (
    <Layout>
      <section className={styles.home}>
        <div className={`${styles.home__wrapper} container`}>
          <aside className={`${styles.sidebar} ${styles[sidebarWidth]}`}>
            <button className={styles.toggleBtn} onClick={toggleSidebar}>
              <RxHamburgerMenu size={30} />
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
          <div
            style={{ width: openSidebar ? "90%" : "100%", marginLeft: openSidebar ? "200px" : "100px"}}
            className={styles.home__content}
          >
            {selectedCategory === "USA" && <Card brandArray={UsaArray} />}
            {selectedCategory === "Turkey" && <Card brandArray={TurkeyArray} />}
            {selectedCategory === "Japan" && <Card brandArray={JapanArray} />}
            {selectedCategory === "Korea" && <Card brandArray={KoreaArray} />}
            {selectedCategory === "Europe" && <Card brandArray={EuropeArray} />}
            {selectedCategory === "China" && <Card brandArray={ChinaArray} />}
          </div>
        </div>
      </section>
    </Layout>
  );
};
