// Use for gallery
const pictures = [
  {
    id: 1,
    src: require("@gallery/relaxation.jpg"),
    caption: "gallery.title.relaxation",
    alt: "gallery.description.relaxation",
    key: "relaxation",
    width: 623,
    height: 831,
  },
  {
    id: 2,
    src: require("@gallery/discovery.jpg"),
    caption: "gallery.title.discovery",
    alt: "gallery.description.discovery",
    key: "discovery",
    width: 320,
    height: 400,
  },
  {
    id: 3,
    src: require("@gallery/acostage.jpg"),
    caption: "gallery.title.acostage",
    alt: "gallery.description.acostage",
    key: "acostage",
    width: 320,
    height: 400,
  },
  {
    id: 4,
    src: require("@gallery/escape.jpg"),
    caption: "gallery.title.escape",
    alt: "gallery.description.escape",
    key: "escape",
    width: 320,
    height: 400,
  },
  {
    id: 5,
    src: require("@gallery/sunset.jpg"),
    caption: "gallery.title.sunset",
    alt: "gallery.description.sunset",
    key: "sunset",
    width: 320,
    height: 400,
  },
  {
    id: 9,
    src: require("@gallery/contemplation.jpg"),
    caption: "gallery.title.contemplation",
    alt: "gallery.description.contemplation",
    key: "contemplation",
  },
  {
    id: 6,
    src: require("@gallery/marina.jpg"),
    caption: "gallery.title.marina",
    alt: "gallery.description.marina",
    key: "marina",
  },
  {
    id: 7,
    src: require("@gallery/romantic.jpg"),
    caption: "gallery.title.romantic",
    alt: "gallery.description.romantic",
    key: "romantic",
  },
  {
    id: 8,
    src: require("@gallery/swimming.jpg"),
    caption: "gallery.title.swimming",
    alt: "gallery.description.swimming",
    key: "swimming",
  },
  {
    id: 10,
    src: require("@gallery/immensity.jpg"),
    caption: "gallery.title.immensity",
    alt: "gallery.description.immensity",
    key: "immensity",
  },
  {
    id: 11,
    src: require("@gallery/conviviality.jpg"),
    caption: "gallery.title.conviviality",
    alt: "gallery.description.conviviality",
    key: "conviviality",
  },
  {
    id: 12,
    src: require("@gallery/made_to_mesure.jpg"),
    caption: "gallery.title.made_to_mesure",
    alt: "gallery.description.made_to_mesure",
    key: "made_to_mesure",
  },
  {
    id: 13,
    src: require("@gallery/possible_layout/layout1.jpg"),
    caption: "gallery.title.IMAGE 1",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 1",
  },
  {
    id: 14,
    src: require("@gallery/possible_layout/layout2.jpg"),
    caption: "gallery.title.IMAGE 2",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 2",
  },
  {
    id: 18,
    src: require("@gallery/possible_layout/layout6.jpg"),
    caption: "gallery.title.IMAGE 6",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 6",
  },
  {
    id: 19,
    src: require("@gallery/possible_layout/layout7.jpg"),
    caption: "gallery.title.IMAGE 7",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 7",
  },
  {
    id: 20,
    src: require("@gallery/possible_layout/layout8.jpg"),
    caption: "gallery.title.IMAGE 8",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 8",
  },
  {
    id: 21,
    src: require("@gallery/possible_layout/layout9.jpg"),
    caption: "gallery.title.IMAGE 9",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 9",
  },
  {
    id: 22,
    src: require("@gallery/possible_layout/layout10.jpg"),
    caption: "gallery.title.IMAGE 10",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 10",
  },
  {
    id: 23,
    src: require("@gallery/possible_layout/layout11.jpg"),
    caption: "gallery.title.IMAGE 11",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 11",
  },
  {
    id: 24,
    src: require("@gallery/possible_layout/layout12.jpg"),
    caption: "gallery.title.IMAGE 12",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 12",
  },
  {
    id: 25,
    src: require("@gallery/possible_layout/layout13.jpg"),
    caption: "gallery.title.IMAGE 13",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 13",
  },
  {
    id: 26,
    src: require("@gallery/possible_layout/layout14.jpg"),
    caption: "gallery.title.IMAGE 14",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 14",
  },
  {
    id: 27,
    src: require("@gallery/possible_layout/layout15.jpg"),
    caption: "gallery.title.IMAGE 15",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 15",
  },
  {
    id: 28,
    src: require("@gallery/boat.jpg"),
    caption: "gallery.title.IMAGE 16",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 16",
  },
  {
    id: 29,
    src: require("@gallery/inside_boat.jpg"),
    caption: "gallery.title.IMAGE 17",
    alt: "gallery.description.Phrase descriptive",
    key: "IMAGE 17",
  },
];

// Use for activities page
const activities = [
  {
    name: "main",
    title: "activities.main.title",
    content: [
      "activities.main.content.first",
      "activities.main.content.second",
    ],
    picture: require("@pictures/activities/country.png"),
    pictureDescription: "activities.main.picture_description",
    direction: "right",
  },
  {
    name: "evora",
    title: "activities.evora.title",
    content: [
      "activities.evora.content.first",
      "activities.evora.content.second",
      "activities.evora.content.third",
      "activities.evora.content.fourth",
      "activities.evora.content.fifth",
      "activities.evora.content.sixth",
    ],
    picture: require("@pictures/activities/evora.jpg"),
    pictureDescription: "activities.evora.picture_description",
    direction: "left",
  },
  {
    name: "monsaraz",
    title: "activities.monsaraz.title",
    content: [
      "activities.monsaraz.content.first",
      "activities.monsaraz.content.second",
      "activities.monsaraz.content.third",
      "activities.monsaraz.content.fourth",
      "activities.monsaraz.content.fifth",
    ],
    picture: require("@pictures/activities/monsaraz.jpg"),
    pictureDescription: "activities.monsaraz.picture_description",
    direction: "right",
  },
  {
    name: "aldeia_da_luz",
    title: "activities.aldeia_da_luz.title",
    content: [
      "activities.aldeia_da_luz.content.first",
      "activities.aldeia_da_luz.content.second",
      "activities.aldeia_da_luz.content.third",
      "activities.aldeia_da_luz.content.fourth",
    ],
    picture: require("@pictures/activities/aldeia_da_luz.png"),
    pictureDescription: "activities.aldeia_da_luz.picture_description",
    direction: "left",
  },
  {
    name: "portel",
    title: "activities.portel.title",
    content: [
      "activities.portel.content.first",
      "activities.portel.content.second",
      "activities.portel.content.third",
      "activities.portel.content.fourth",
    ],
    picture: require("@pictures/activities/portel.jpg"),
    pictureDescription: "activities.portel.picture_description",
    direction: "right",
    website: "https://www.ville-leportel.fr/",
  },
  {
    name: "moura",
    title: "activities.moura.title",
    content: [
      "activities.moura.content.first",
      "activities.moura.content.second",
      "activities.moura.content.third",
    ],
    picture: require("@pictures/activities/moura.jpg"),
    pictureDescription: "activities.moura.picture_description",
    direction: "left",
  },
  {
    name: "beach",
    title: "activities.beach.title",
    content: [
      "activities.beach.content.first",
      "activities.beach.content.second",
      "activities.beach.content.third",
      "activities.beach.content.fourth",
      "activities.beach.content.fifth",
      "activities.beach.content.sixth",
    ],
    picture: require("@pictures/activities/beach.jpg"),
    pictureDescription: "activities.beach.picture_description",
    direction: "right",
  },
  {
    name: "fishing",
    title: "activities.fishing.title",
    content: [
      "activities.fishing.content.first",
      "activities.fishing.content.second",
      "activities.fishing.content.third",
    ],
    picture: require("@pictures/activities/alqueva_predator_fishing.png"),
    pictureDescription: "activities.fishing.picture_description",
    direction: "left",
    website: "https://alqueva-predator-fishing.com/",
  },
  {
    name: "museum",
    title: "activities.museum.title",
    content: [
      "activities.museum.content.first",
      "activities.museum.content.second",
      "activities.museum.content.third",
      "activities.museum.content.fourth",
      "activities.museum.content.fifth",
      "activities.museum.content.sixth",
    ],
    picture: require("@pictures/activities/museum.jpg"),
    pictureDescription: "activities.museum.picture_description",
    direction: "right",
    website: "https://www.museudomedronho.pt/",
  },
  {
    name: "dark_sky",
    title: "activities.dark_sky.title",
    content: [
      "activities.dark_sky.content.first",
      "activities.dark_sky.content.second",
      "activities.dark_sky.content.third",
    ],
    picture: require("@pictures/activities/dark_sky.png"),
    pictureDescription: "activities.dark_sky.picture_description",
    direction: "left",
    website: "https://darkskyalqueva.com/",
  },
];

// Use for restaurant page
const restaurants = [
  {
    name: "Restaurante o Sao Pedro em Portel",
    googlePosition:
      "https://www.google.com/maps/place/Largo+5+D'outubro+6,+7220-363+Portel,+Portugal/@38.3078311,-7.7068383,17z/data=!3m1!4b1!4m6!3m5!1s0xd10a95184a30f93:0x25ac2c5d14966341!8m2!3d38.3078269!4d-7.7042634!16s%2Fg%2F11c27m1ckr?entry=ttu",
    address: "Largo 5 de outubro n6, Portel, Portugal",
    phone: "+351 266 611 520",
    mail: "restaurante_s.pedro@hotmail.com",
    picture: require("@pictures/restaurants/Sao_Pedro.png"),
    pictureDescription: "TODO",
    facebookLink: "https://www.facebook.com/S.Pedro.Restaurante/",
    class: "restaurant_sao-pedro",
  },
  {
    name: "Restaurante O Xarès em Monsaraz",
    googlePosition:
      "https://www.google.com/maps/place/Xarez/@38.4443037,-7.3830528,17z/data=!3m1!4b1!4m6!3m5!1s0xd1735dee4e0299b:0xb16065c0379e20f3!8m2!3d38.4442995!4d-7.3804725!16s%2Fg%2F11ry7rmdfr",
    address: "Rua de Santiago 33, 7200-175, Portugal",
    phone: "+351 266 557 052",
    mail: null,
    picture: require("@pictures/restaurants/Xares_em_Monsarez.jpg"),
    pictureDescription: "TODO",
    facebookLink: "https://www.facebook.com/Monsaraz.Xarez/",
    class: "restaurant_xares-monsarez",
  },
  {
    name: "Taberna do liberato em Moura",
    googlePosition:
      "https://www.google.com/maps/place/Tv.+de+Mouraria,+Moura,+Portugal/@38.1422109,-7.4548336,17z/data=!3m1!4b1!4m10!1m2!2m1!1s2%C2%AA+Rua+da+Mouraria,+3,+Moura,+Portugal!3m6!1s0xd10bf69b64798db:0xea03b091a662fe1b!8m2!3d38.1422067!4d-7.4522587!15sCicywqogUnVhIGRhIE1vdXJhcmlhLCAzLCBNb3VyYSwgUG9ydHVnYWySAQVyb3V0ZeABAA!16s%2Fg%2F119w0nzfq?entry=ttu",
    address: "2ª Rua da Mouraria, 3, Moura, Portugal",
    phone: null,
    mail: null,
    picture: require("@pictures/restaurants/Liberato_em_Moura.jpg"),
    pictureDescription: "TODO",
    facebookLink:
      "https://www.facebook.com/people/Taberna-do-Liberato/100063849437648/",
    class: "restaurant_liberato-moura",
  },
  {
    name: "Restaurante o aficionado em Amieira",
    googlePosition:
      "https://www.google.com/maps/place/O+Aficionado/@38.2850629,-7.5590862,15z/data=!4m6!3m5!1s0xd10b102eddbfe6b:0x208ad87200e90b6e!8m2!3d38.2850629!4d-7.5590862!16s%2Fg%2F11c30tngkf?entry=ttu",
    address: "rua de evora, Portel, Portugal",
    phone: "+351 266 611 374",
    mail: "restaurante.aficionado@sapo.pt",
    picture: require("@pictures/restaurants/Aficionado_em_Amieira.jpg"),
    pictureDescription: "TODO",
    facebookLink: "https://www.facebook.com/OAficionado/",
    class: "restaurant_aficionado-amieira",
  },
];

// Use for Tour page
const rates = [
  {
    tour: "hour",
    key: 1,
    picture: require("@pictures/tours/one_hour.jpg"),
    prices: [
      { personCount: 2, price: "60 €" },
      { personCount: 4, price: "80 €" },
      { personCount: 6, price: "100 €" },
      { personCount: 8, price: "120 €" },
    ],
    included: "tour.hour.included",
  },
  {
    tour: "two_hours",
    key: 2,
    picture: require("@pictures/tours/two_hours.jpg"),
    prices: [
      { personCount: 2, price: "100 €" },
      { personCount: 4, price: "120 €" },
      { personCount: 6, price: "140 €" },
      { personCount: 8, price: "160 €" },
    ],
    included: "tour.two_hours.included",
    special: "tour.three_hours.special",
  },
  {
    tour: "three_hours",
    key: 3,
    picture: require("@pictures/tours/three_hours.jpg"),
    prices: [
      { personCount: 2, price: "40 €" },
      { personCount: 4, price: "70 €" },
      { personCount: 6, price: "200 €" },
      { personCount: 8, price: "230 €" },
    ],
    included: "tour.three_hours.included",
    special: "tour.three_hours.special",
  },
  {
    tour: "private",
    key: 4,
    picture: require("@pictures/tours/personnalized.jpg"),
    isPrices: false,
  },
];

export { pictures, activities, restaurants, rates };