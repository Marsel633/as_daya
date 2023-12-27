// import hm from "../assets/logo-images/h-m.svg";
// import zara from "../assets/logo-images/zara.svg";
// import newBalance from "../assets/logo-images/new-balance.svg";
// import gap from "../assets/logo-images/gap.svg";
// import oldNavy from "../assets/logo-images/old-navy.svg";
// import puma from "../assets/logo-images/puma-logo.svg";
// import lacoste from "../assets/logo-images/lacoste-logo.svg";
// import nike from "../assets/logo-images/nike-8.svg";
// import michaelKors from "../assets/logo-images/michael-kors.svg";
// import victoriasSecret from "../assets/logo-images/victorias-secret.svg";
// import crocs from "../assets/logo-images/logo-crocs.svg";
// import theChPlace from "../assets/logo-images/the-childrens-place.svg";
// import tommyHelfiger from "../assets/logo-images/tommy-hilfiger-2.svg";
// import geox from "../assets/logo-images/geox-1.svg";
// import usPolo from "../assets/logo-images/uspa-usa.png";

type HowToOrder = {
  title: string;
  description: string;
};

type Categories = {
  id: number;
  title: string;
  icon: string;
};

export type Brands = {
  title: string;
  url: string;
};

export const aboutMeArray: string[] = [
  "- Знаю всё о брендовых товарах от масс-маркета до тяжелого люкса ",
  "- Выкупаю товар с таких стран, как США, Турция, Япония и Китай ",
  "- Вышла на новый уровень по выкупу товара, теперь радую Вас заказами с Европы",
  "- Выкупила более 5000 тысяч товаров за 2023 год",
];

export const howToOrderMessages: HowToOrder[] = [
  {
    title: "Шаг 1",
    description:
      "🟠 Открываем любой сайт необходимого бренда. Например ZARA (Турция)",
  },
  {
    title: "Шаг 2",
    description: "🟠 Присылаете ссылку нужной позиции",
  },
  {
    title: "Шаг 3",
    description: "🟠 Выбираем размер и цвет (размер можем подобрать вместе)",
  },
  {
    title: "Шаг 4",
    description: "🟠 Считаем стоимость заказа по актуальному курсу",
  },
  {
    title: "Шаг 5",
    description:
      "🟠 Вносите предоплату в размере 70% от общей стоимости заказа",
  },
  {
    title: "Шаг 6",
    description: "🟠 Выкупаю Ваш заказ ✅",
  },
  {
    title: "Шаг 7",
    description:
      "🟠 Оплата за доставку товара производится только по прибытию в Бишкек (могу примерно рассчитать стоимость от веса)",
  },
  {
    title: "Шаг 8",
    description:
      "🟠 Комиссия составляет 10% от стоимости товара (минимально 5$)",
  },
  {
    title: "Шаг 9",
    description: "🟠 Люкс и премиум сегмент считается индивидуально🫱🏻‍🫲🏼",
  },
];

export const categories: Categories[] = [
    {
        id: 1,
        title: "USA",
        icon: "🇺🇸",
      },
  {
    id: 2,
    title: "Turkey",
    icon: "🇹🇷",
  },
  {
    id: 3,
    title: "Europe",
    icon: "🇪🇺",
  },
  {
    id: 4,
    title: "Japan",
    icon: "🇯🇵",
  },
  {
    id: 5,
    title: "China",
    icon: "🇨🇳",
  },
];

export const UsaArray: Brands[] = [
  {
    title: "Puma",
    url: "https://us.puma.com/us/en",
  },
  {
    title: "Lacoste",
    url: "https://www.lacoste.com/gb/",
  },
  {
    title: "Nike",
    url: "https://www.nike.com/",
  },
  {
    title: "Michael Kors",
    url: "https://www.michaelkors.com/",
  },
  {
    title: "Calvin Klein",
    url: "https://www.calvinklein.us/en",
  },
  {
    title: "Zara",
    url: "https://www.zara.com/tr/en/woman-beachwear-l1052.html?v1=2253149",
  },
  {
    title: "NewBalance",
    url: "https://www.newbalance.com/",
  },
  {
    title: "H&M",
    url: "https://www2.hm.com/en_us/index.html",
  },
  {
    title: "Tommy Helfiger",
    url: "https://usa.tommy.com/en",
  },
  {
    title: "Victoria's Secret",
    url: "https://www.victoriassecret.com/us/",
  },
  {
    title: "Levi's",
    url: "https://www.levi.com/US/en_US/",
  },
  {
    title: "The North Face",
    url: "https://www.thenorthface.com/en-us",
  },
  {
    title: "Mango",
    url: "https://shop.mango.com/us/women",
  },
  {
    title: "Under Armor",
    url: "https://www.underarmour.com/en-us/",
  },
  {
    title: "Nordstrom Rack",
    url: "https://www.nordstromrack.com/",
  },
  {
    title: "Armani",
    url: "https://www.armani.com/en-us",
  },
  {
    title: "Carter's",
    url: "https://www.carters.com/",
  },
  {
    title: "Columbia",
    url: "https://www.columbia.com/",
  },
  {
    title: "Guess",
    url: "https://www.guess.com/us/en/home/",
  },
  {
    title: "Ralph Lauren",
    url: "https://www.ralphlauren.com/?_gl=1*1codiib*_ga*NDg2MjkwODkzLjE3MDM1MDkyMzU.*_ga_JWJC3HP9M9*MTcwMzUwOTIzNC4xLjEuMTcwMzUwOTI1MC40Ni4wLjA.",
  },
  {
    title: "Gap",
    url: "https://www.gap.com/",
  },
  {
    title: "Old Navy",
    url: "https://oldnavy.gap.com/",
  },
  {
    title: "Crocs",
    url: "https://www.crocs.com/",
  },
  {
    title: "The Children's Place",
    url: "https://www.childrensplace.com/us/home",
  },
  {
    title: "US Polo Association",
    url: "https://www.uspolo.org/",
  },
  {
    title: "Geox",
    url: "https://www.geox.com/int/",
  },
];
export const EuropeArray: Brands[] = [
  {
    title: "Farfetch",
    url: "https://www.farfetch.com",
  },
  {
    title: "Versace",
    url: "https://www.versace.com",
  },
  {
    title: "Prada",
    url: "https://www.prada.com",
  },
  {
    title: "Gucci",
    url: "https://www.gucci.com/it/",
  },
  {
    title: "Bershka",
    url: "https://www.bershka.com",
  },
  {
    title: "Intimissimi",
    url: "https://www.intimissimi.com",
  },
  {
    title: "Terranova",
    url: "https://www.terranovastyle.com",
  },
  {
    title: "Loro Piana",
    url: "https://it.loropiana.com/en/",
  },
  {
    title: "H&M Italy",
    url: "https://www2.hm.com/it_it",
  },
  {
    title: "ASOS Italy",
    url: " https://www.asos.com/it/",
  },
  {
    title: "LuisaViaRoma",
    url: "https://www.luisaviaroma.com",
  },
  {
    title: "Net-A-Porter",
    url: "https://www.net-a-porter.com",
  },
  {
    title: "Zalando",
    url: " https://www.zalando.it",
  },
  {
    title: "OVS",
    url: "https://www.ovs.it",
  },
  {
    title: "Calzedonia",
    url: "https://www.calzedonia.com",
  },
  {
    title: "KIKO Milano",
    url: "https://www.kikocosmetics.com",
  },
  {
    title: "Coin",
    url: " https://www.coin.it",
  },
  {
    title: "Golden Goose",
    url: "https://www.goldengoosedeluxebrand.com",
  },
  {
    title: "SSENSE",
    url: "https://www.ssense.com",
  },
  {
    title: "Forzieri",
    url: "https://www.forzieri.com",
  },
  {
    title: "Max Mara",
    url: "https://it.maxmara.com",
  },
  {
    title: "Benetton",
    url: "https://www.benetton.com",
  },
  {
    title: "Motivi",
    url: "https://www.motivi.com",
  },
  {
    title: "Sephora Italy",
    url: "https://www.sephora.it",
  },
  {
    title: "PINKO",
    url: "https://www.pinko.com/it",
  },
  {
    title: "Bata Italy",
    url: " https://www.bata.it",
  },
  {
    title: "Diesel Italy",
    url: "https://www.diesel.com/it/",
  },
  {
    title: "Missoni",
    url: "https://www.missoni.com/it",
  },
  {
    title: "Kiton",
    url: "https://it.kiton.com/",
  },
  {
    title: "Harmont&Blaine",
    url: "https://www.harmontblaine.com/us/en/",
  },
  {
    title: "Premiata",
    url: "https://premiata.it/",
  },
  {
    title: "Zegna",
    url: "https://www.zegna.com/it-en/",
  },
];
export const ChinaArray: Brands[] = [
  {
    title: "TaoBao",
    url: "https://world.taobao.com/",
  },
  {
    title: "Alibaba",
    url: "https://m.1688.com/?src=desktop",
  },
  {
    title: "PingDuoDuo",
    url: "https://m.pinduoduo.com/home/3c.html",
  },
];
export const JapanArray: Brands[] = [
  {
    title: "Nike",
    url: "https://www.nike.com/jp/",
  },
  {
    title: "Mizuno",
    url: "https://jpn.mizuno.com/",
  },
  {
    title: "Uniqlo",
    url: "https://www.uniqlo.com/jp/ja/",
  },
  {
    title: "Asics",
    url: "https://www.asics.com/jp/ja-jp/",
  },
  {
    title: "Onitsuka Tiger",
    url: "https://www.onitsukatiger.com/jp/ja-jp",
  },
  {
    title: "GU",
    url: "https://www.gu-global.com/jp/ja/",
  },
  {
    title: "Ingni",
    url: "https://www.ingni-store.com/smart/",
  },
  {
    title: "Zozo",
    url: "https://zozo.jp/",
  },
  {
    title: "Kapital",
    url: "https://www.kapital-webshop.jp/",
  },
  {
    title: "Celice",
    url: "https://www.celice.co.jp/",
  },
  {
    title: "Motaro Jeans",
    url: "https://momotarojeans-store.com/",
  },
  {
    title: "ABC Mart",
    url: "https://www.abc-mart.net/shop/",
  },
  {
    title: "Newercap",
    url: "https://www.neweracap.jp/",
  },
  {
    title: "Zoff",
    url: "https://www.zoff.co.jp/shop/default/.aspx",
  },
  {
    title: "Desente",
    url: "https://www.descente-onlineshop.jp/dct/index.html",
  },
];
export const TurkeyArray: Brands[] = [
  {
    title: "H&M Turkey",
    url: "https://www2.hm.com/tr_tr/index.html",
  },
  {
    title: "Zara Turkey",
    url: "https://www.zara.com/tr/",
  },
  {
    title: "Puma Turkey",
    url: "https://tr.puma.com/?utm_source=GGL_PMAX&utm_medium=PMAX&utm_campaign=PMax_Generic_GGL_PMAX_GENERIC%7CTR_TR&utm_medium=PMAX&utm_source=GGL_PMAX&utm_campaign=PMax_Generic_GGL_PMAX_GENERIC%7CTR_TR&gbraid=0AAAAAC8EoW-pp22NlAL6HzdLEEYSuI2oG&gclid=CjwKCAjw3ueiBhBmEiwA4BhspJBxfYVJWQgwZIrIvdk0VrTqgeO4alvP4vR2Rl_Fj8FLJ-lCL1jAohoCRdkQAvD_BwE",
  },
  {
    title: "Polo Turkey",
    url: "https://tr.uspoloassn.com/",
  },
  {
    title: "Bershka",
    url: "https://www.bershka.com/tr/",
  },
  {
    title: "Viadellerose",
    url: "https://www.viadellerose.com/",
  },
  {
    title: "Instreet",
    url: "https://www.instreet.com.tr/",
  },
  {
    title: "Babymall",
    url: "https://www.babymall.com.tr/",
  },
  {
    title: "Desa",
    url: "https://www.desa.com.tr/",
  },
  {
    title: "Gant",
    url: "https://www.gant.com.tr/",
  },
  {
    title: "Derimod",
    url: "https://derimod.com.tr/",
  },
  {
    title: "Journey",
    url: "https://www.journey.com.tr/",
  },
  {
    title: "Mango Turkey",
    url: "https://shop.mango.com/tr/kadin",
  },
  {
    title: "Stradivaius",
    url: "https://www.stradivarius.com/tr/",
  },
  {
    title: "Massimo Dutti",
    url: "https://www.massimodutti.com/tr/",
  },
  {
    title: "Ecco",
    url: "https://tr.ecco.com/",
  },
  {
    title: "Kemal Tanca",
    url: "https://www.kemaltancaonline.com/en",
  },
  {
    title: "Trendyol",
    url: "https://www.trendyol.com/en/select-country",
  },
  {
    title: "Oysho",
    url: "https://www.oysho.com/tr/",
  },
  {
    title: "BMD",
    url: "https://www.bikinimayokinidunyasi.com/",
  },
  {
    title: "Madamecoco",
    url: "https://www.madamecoco.com/",
  },
  {
    title: "Tergan",
    url: "https://www.tergan.com.tr/",
  },
];
