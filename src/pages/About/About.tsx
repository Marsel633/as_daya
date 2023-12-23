import myImg from "../../assets/asd.png"
import styles from "./About.module.scss"

export const About = () => {
  return (
    <section className={`${styles.home} container`}>
      <h1>Привет 🖐, давай знакомиться! Меня зовут <span>Даяна</span></h1>
      <div className={styles.myImage}><img src={myImg} alt="my photo" /></div>
      <div>⚫️ Меня зовут Даяна
⚫️ Мне 22 года
⚫️ Замужем 💍
⚫️ Готовлюсь стать мамой 🤰🏻
⚫️ Есть высшее образование. Специальность - юриспруденция 👩🏻‍🎓
⚫️ Всегда стараюсь обучаться чему то новому, посещала многие тренинги и курсы👩🏻‍💻. (И до сих пор обучаюсь 😂)
1. Наращивание ресниц
2. Мастер ногтевого сервиса
3. Стилист
4. SMM - специалист, сертифицированный таргетолог и мобилограф
⚫️ Но остановилась на байерстве. Помогаю людям выкупать любимые бренды по вкусным ценам ✅
⚫️ Недавно взяла новое обучение, чтобы выкупать товар с Европы.
⚫️ Теперь могу заказывать товары не только с Турции, США, Китая, но и Италия, Испания, Португалия, Франция, Германия, Польша, Великобритания, Япония, Корея. 🔝
⚫️ Опыт в сфере байерства - более года
⚫️ Так же очень люблю животных, особенно собак и лошадей 🤍</div>
    </section>
  );
};
