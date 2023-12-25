import { China, Europe, Japan, Korea, Layout, Turkey, Usa } from "../../components";
import styles from "./HomePage.module.scss";
import { useState } from "react";
import { categories } from "../../constants";
import { RxHamburgerMenu } from "react-icons/rx";

export const HomePage = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("USA");
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const sidebarWidth = openSidebar ? "activeMenu" : "inactiveMenu";

  return (
    <Layout>
      <section className={styles.home}>
        <div className={`${styles.home__wrapper} container`}>
          <aside className={`${styles.sidebar} ${styles[sidebarWidth]}`}>
          <button className={styles.toggleBtn} onClick={toggleSidebar}>
          <RxHamburgerMenu size={30}/>
          </button>
            {categories.map((item) => (
              <button onClick={() => setSelectedCategory(item.title)} className={styles.categoriesBtn} key={item.id}>
                {item.icon}
                {openSidebar ? <span>{item.title}</span> : null}
              </button>
            ))}
          </aside>
          <div className={styles.home__content}>
            {selectedCategory === "USA" && <Usa/>}
            {selectedCategory === "Turkey" && <Turkey/>}
            {selectedCategory === "Japan" && <Japan/>}
            {selectedCategory === "South Korea" && <Korea/>}
            {selectedCategory === "Europe" && <Europe/>}
            {selectedCategory === "China" && <China/>}
          </div>
        </div>
      </section>
    </Layout>
  );
};
