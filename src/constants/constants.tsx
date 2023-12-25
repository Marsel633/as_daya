import hm from "../assets/logo-images/h-m.svg";
import zara from "../assets/logo-images/zara.svg";
import newBalance from "../assets/logo-images/new-balance.svg";
import gap from "../assets/logo-images/gap.svg";
import oldNavy from "../assets/logo-images/old-navy.svg";
import puma from "../assets/logo-images/puma-logo.svg";
import lacoste from "../assets/logo-images/lacoste-logo.svg";
import nike from "../assets/logo-images/nike-8.svg";
import michaelKors from "../assets/logo-images/michael-kors.svg";
import victoriasSecret from "../assets/logo-images/victorias-secret.svg";
import crocs from "../assets/logo-images/logo-crocs.svg";
import theChPlace from "../assets/logo-images/the-childrens-place.svg";
import tommyHelfiger from "../assets/logo-images/tommy-hilfiger-2.svg";
import geox from "../assets/logo-images/geox-1.svg";
import usPolo from "../assets/logo-images/uspa-usa.png";

type HowToOrder = {
  title: string;
  description: string;
};

type Categories = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

type Brands = {
  title: string;
  url: string;
  logo: React.ReactNode;
};

export const aboutMeArray: string[] = [
  "⚫️ Меня зовут Даяна",
  "⚫️ Мне 22 года",
  "⚫️ Замужем 💍",
  "⚫️ Готовлюсь стать мамой 🤰🏻",
  "⚫️ Есть высшее образование. Специальность - юриспруденция 👩🏻‍🎓",
  "⚫️ Всегда стараюсь обучаться чему то новому, посещала многие тренинги и курсы👩🏻‍💻. (И до сих пор обучаюсь 😂)",
  "1. Наращивание ресниц",
  "2. Мастер ногтевого сервиса",
  "3. Стилист",
  "4. SMM - специалист, сертифицированный таргетолог и мобилограф",
  "⚫️ Но остановилась на байерстве. Помогаю людям выкупать любимые бренды по вкусным ценам ✅",
  "⚫️ Недавно взяла новое обучение, чтобы выкупать товар с Европы.",
  "⚫️ Теперь могу заказывать товары не только с Турции, США, Китая, но и Италия, Испания, Португалия, Франция, Германия, Польша, Великобритания, Япония, Корея. 🔝",
  "⚫️ Опыт в сфере байерства - более года",
  "⚫️ Так же очень люблю животных, особенно собак и лошадей 🤍",
];

export const howToOrderMessages: HowToOrder[] = [
  {
    title: "Шаг 1",
    description:
      "🟠 Открываем любой сайт необходимого бренда. Например ZARA (Турция)",
  },
  {
    title: "Шаг 2",
    description:
      "🟠 В шапке профиля указан сайт в котором собраны известные бренды по разделам ⬆️",
  },
  {
    title: "Шаг 3",
    description: "🟠 Присылаете ссылку нужной позиции",
  },
  {
    title: "Шаг 4",
    description: "🟠 Выбираем размер и цвет (размер можем подобрать вместе)",
  },
  {
    title: "Шаг 5",
    description: "🟠 Считаем стоимость заказа по актуальному курсу",
  },
  {
    title: "Шаг 6",
    description:
      "🟠 Вносите предоплату в размере 70% от общей стоимости заказа",
  },
  {
    title: "Шаг 7",
    description: "🟠 Выкупаю Ваш заказ ✅",
  },
  {
    title: "Шаг 8",
    description:
      "🟠 Оплата за доставку товара производится только по прибытию в Бишкек (могу примерно рассчитать стоимость от веса)",
  },
  {
    title: "Шаг 9",
    description:
      "🟠 Комиссия составляет 10% от стоимости товара (минимально 5$)",
  },
  {
    title: "Шаг 10",
    description: "🟠 Люкс и премиум сегмент считается индивидуально🫱🏻‍🫲🏼",
  },
];

export const categories: Categories[] = [
    {
        id: 1,
        title: "USA",
        icon: <span style={{ fontSize: "3.2rem" }}>🇺🇸</span>,
      },
  {
    id: 2,
    title: "Turkey",
    icon: <span style={{ fontSize: "3.2rem" }}>🇹🇷</span>,
  },
  {
    id: 3,
    title: "Europe",
    icon: <span style={{ fontSize: "3.2rem" }}>🇪🇺</span>,
  },
  {
    id: 4,
    title: "Japan",
    icon: <span style={{ fontSize: "3.2rem" }}>🇯🇵</span>,
  },
  {
    id: 5,
    title: "South Korea",
    icon: <span style={{ fontSize: "3.2rem" }}>🇰🇷</span>,
  },
  {
    id: 6,
    title: "China",
    icon: <span style={{ fontSize: "3.2rem" }}>🇨🇳</span>,
  },
];

export const UsaArray: Brands[] = [
  {
    title: "H&M",
    url: "https://www2.hm.com/en_us/index.html",
    logo: <img src={hm} alt="H&M" />,
  },
  {
    title: "Zara",
    url: "https://www.zara.com/tr/en/woman-beachwear-l1052.html?v1=2253149",
    logo: <img src={zara} alt="zara" />,
  },
  {
    title: "NewBalance",
    url: "https://www.newbalance.com/",
    logo: <img src={newBalance} alt="newBalance" />,
  },
  {
    title: "Gap",
    url: "https://www.gap.com/",
    logo: <img src={gap} alt="gap" />,
  },
  {
    title: "Old Navy",
    url: "https://oldnavy.gap.com/",
    logo: <img src={oldNavy} alt="oldNavy" />,
  },
  {
    title: "Puma",
    url: "https://in.puma.com/in/en?gclid=Cj0KCQjwu-KiBhCsARIsAPztUF3YoPaXDH51Mzc6eAPESStoGxbWI8TS4Y30chlp32PWgOJ1e4lon2waAmOTEALw_wcB",
    logo: <img src={puma} alt="puma" />,
  },
  {
    title: "Lacoste",
    url: "https://www.lacoste.com/gb/",
    logo: <img src={lacoste} alt="lacoste" />,
  },
  {
    title: "Nike",
    url: "https://www.nike.com/ie/?gclid=Cj0KCQjwu-KiBhCsARIsAPztUF2rvHIpGGptcAuF_0Iypuzb9Whtlbzcx59y8LHeYuuRvWg5wFIlUa8aAnViEALw_wcB",
    logo: <img src={nike} alt="nike" />,
  },
  {
    title: "Michael Kors",
    url: "https://www.michaelkors.com/",
    logo: <img src={michaelKors} alt="michaelKors" />,
  },
  {
    title: "Victoria's Secret",
    url: "https://www.victoriassecret.com/us/",
    logo: <img src={victoriasSecret} alt="victoriasSecret" />,
  },
  {
    title: "Crocs",
    url: "https://www.crocs.com/",
    logo: <img src={crocs} alt="crocs" />,
  },
  {
    title: "The Children's Place",
    url: "https://www.childrensplace.com/us/home",
    logo: <img src={theChPlace} alt="theChPlace" />,
  },
  {
    title: "US Polo Association",
    url: "https://www.uspolo.org/",
    logo: <img src={usPolo} alt="usPolo" />,
  },
  {
    title: "Geox",
    url: "https://www.geox.com/int/",
    logo: <img src={geox} alt="geox" />,
  },
  {
    title: "Tommy Helfiger",
    url: "https://usa.tommy.com/en",
    logo: <img src={tommyHelfiger} alt="tommyHelfiger" />,
  },
];

export const EuropeArray: Brands[] = [
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
];
export const ChinaArray: Brands[] = [
  {
    title: "TaoBao",
    url: "https://world.taobao.com/",
    logo: "./logo-images/taobao-logo.svg",
  },
  {
    title: "Alibaba",
    url: "https://m.1688.com/?src=desktop",
    logo: "./logo-images/alibaba-com-2.svg",
  },
  {
    title: "PingDuoDuo",
    url: "https://m.pinduoduo.com/home/3c.html",
    logo: "./logo-images/pinduoduo.svg",
  },
];
export const KoreaArray: Brands[] = [
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
  {
    title: "",
    url: "",
    logo: "",
  },
];
export const JapanArray: Brands[] = [
  {
    title: "Uniqlo",
    url: "https://www.uniqlo.com/us/en/",
    logo: "./logo-images/uniqlo-1.svg",
  },
  {
    title: "Asics",
    url: "https://www.asics.com/jp/ja-jp/",
    logo: "./logo-images/asics-6.svg",
  },
  {
    title: "Onitsuka Tiger",
    url: "https://www.onitsukatiger.com/jp/ja-jp",
    logo: "./logo-images/onitsuka-tiger-1.svg",
  },
  {
    title: "GU",
    url: "https://www.gu-global.com/jp/ja/",
    logo: "./logo-images/gu-logo-1.svg",
  },
  {
    title: "Ingni",
    url: "https://www.ingni-store.com/smart/",
    logo: "./logo-images/ing.svg",
  },
  {
    title: "Mizuno",
    url: "https://jpn.mizuno.com/",
    logo: "./logo-images/mizuno.svg",
  },
];
export const TurkeyArray: Brands[] = [
  {
    title: "H&M Turkey",
    url: "https://www2.hm.com/tr_tr/index.html",
    logo: "./logo-images/h-m.svg",
  },
  {
    title: "Zara Turkey",
    url: "https://www.zara.com/tr/",
    logo: "./logo-images/zara.svg",
  },
  {
    title: "Puma Turkey",
    url: "https://tr.puma.com/?utm_source=GGL_PMAX&utm_medium=PMAX&utm_campaign=PMax_Generic_GGL_PMAX_GENERIC%7CTR_TR&utm_medium=PMAX&utm_source=GGL_PMAX&utm_campaign=PMax_Generic_GGL_PMAX_GENERIC%7CTR_TR&gbraid=0AAAAAC8EoW-pp22NlAL6HzdLEEYSuI2oG&gclid=CjwKCAjw3ueiBhBmEiwA4BhspJBxfYVJWQgwZIrIvdk0VrTqgeO4alvP4vR2Rl_Fj8FLJ-lCL1jAohoCRdkQAvD_BwE",
    logo: "./logo-images/puma-logo.svg",
  },
  {
    title: "Polo Turkey",
    url: "https://tr.uspoloassn.com/",
    logo: "./logo-images/uspa.png",
  },
  {
    title: "Bershka",
    url: "https://www.bershka.com/tr/",
    logo: "./logo-images/bershka-1.svg",
  },
  {
    title: "Stradivaius",
    url: "https://www.stradivarius.com/tr/",
    logo: "./logo-images/stradivarius-1.svg",
  },
  {
    title: "Massimo Dutti",
    url: "https://www.massimodutti.com/tr/",
    logo: "./logo-images/massimo-dutti-1.svg",
  },
  {
    title: "Ecco",
    url: "https://tr.ecco.com/",
    logo: "./logo-images/ecco-2.svg",
  },
  {
    title: "Trendyol",
    url: "https://www.trendyol.com/en/select-country",
    logo: "./logo-images/trendyol-stayhome.svg",
  },
];
