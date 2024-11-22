const data = {
  heroSectionModelOne:
    "https://s3-alpha-sig.figma.com/img/69c1/9ac3/5494e7ff1cfc729f9a79cc9dfd357f02?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZvLzc7M1ooa9yViREbtl9YlE4v5CkyayGJefsMs8GnQKl0syh5Kx~EK3k~Q8lWQpDUd3ngSd77wsQYrEmNCl2wud8pOrkFOVLdMoh6IDNfP6cXa1gIwEzZ0UXm0yyWpM8MCouGvRe83aaBzgiOoReSSNh3fYueJRyx0GzvnaRRc0n6k9NDMlXAoBXp63Bzgmmk3b78NDcAt5nQ1ehok6hYKSSO3k~7FhBIaBuJmFkEzWBzAQy0l1vgIjMKDgjO-McVz6lwTE17SI8C2Qc7ViY8uC9Lw4LnmGq61KTzLy5Z97E8GDU9JpkBHI00D96y3vxSfQcTppDMT2e6YX8KVUw__",
  heroSectionModelTwo:
    "https://s3-alpha-sig.figma.com/img/e4d6/1c2e/483eae9fed23e712711157b0716dc927?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQdY9NXi4z68PkUVhqtbi~p4zUqWf~QGaXyQuvsH1wSMoX0MaTjRV7YA8Nq0OtZ4gyRSzbmiPREzwpLESiDFIA5YwaKfwOqbdzzHOy3B~wv1YfF8wx34zrMwvIV-AzSAwBYS7WPUSz6eNSaeJt9pKca1f2JEjdiqNWKKsMPLAIE17kcMurELC8zH46Df90L0cB415AVqwI6sryqnZMkAzzah47Z-eJSz6ikS-kLO7muGg8Y~cpon2ALNGykzsgcT2Cw2jsFaqXA95TtNiSg7BJ4HTFFYRZi3DUGpQr28P1GgmT06EbfBnQuu1DPcuQ0hWbIokA65bjd-mhzxXNkQkA__",
  hamburgerIcon:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/2c693ed1c1c8f5b0630ab84c50139b0532178fb4",
  userAvatar:
    "https://s3-alpha-sig.figma.com/img/5e4a/3170/267a651a652fb2ee7a3f288490b02114?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOOEwV2KQitFsIL6o8~-4P9LurTUmFf-d7so8o-YPpbf5BR8mDH6lcb3w1t0cWdaXrcN66Q25Ld~DHBMoYlwcVD9vbt~f6VRP7b521TaflR47jEOLr6pqeMUYQ~b5JbvTTKxYYU5k9VLSfuBe5Y0xL0aIFM7qUonFM9BhqgPXWFM1LkUn3-EbiDRsp-zKJVffBGKHl1tWrenD-JVkLB8S5NBCglv8CnPeySJxGPEkXzvkdBxWd10rYLFAtBcl1XIvHCV78TYNiCDb0AAboh4uR9kw1VhbtHUtY3hRPAk4EmXfd0mw9V9eaLrDABURpIC98OHbPRmIqMJ3bYbQX7iDA__",
  cartIcon:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/0dae45ddb8892b54d8eeb5dd9377c66a4087a157",
  pinIcon:
    "https://s3-alpha-sig.figma.com/img/f277/15bb/6e6ab9f0bcb3a0b07191c3bf52ea4a72?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYMFYjrdXk~PJatvluJoFOjU9QHOaAEJMu~OeeN7z4NL0JBDy7OFkkZ-Ol2nvyrORg7GqUznmExRTP8H73Z8Ur3OghLaabT0buAUKrGk7auvts8DTnJYH94lFgE1dFdlnpFUjw4tD7XmT~rczVpTXWpAurv1Q4CxSkZ3k9pqy8BEtucK3qfBlXg-nbfX41spKFg7YBNCUzM97zVE2jrc6YfHR5Y-kRQZmmSkloyZhkO6owauexocnylMnNNT6pw6q8kDIqcdFLn8QTUjaQxj2hlNn237Sl-echGW2o7YccPg6OLVJuMo3J9Nhd01n83ykOQCNw~JGsNluyjskBJPUg__",
};

const dealsData = [
  // Vegan Category
  {
    category: [
      {
        id: 1,
        name: "Vegan",
        restraunt: {
          name: "Chef Burgers London",
          image:
            "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/be11353a02f4b1476ff7565a60acdccf6f4f0dce",
          offer: "-40%",
        },
      },
      {
        id: 2,
        name: "Vegan",
        restraunt: {
          name: "Grand Ai Cafe London",
          image:
            "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/38d1893b2f2a0b559a983df1cb475967a19332bf",
          offer: "-20%",
        },
      },
      {
        id: 3,
        name: "Vegan",
        restraunt: {
          name: "Butterbrot Café London",
          image:
            "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/be11353a02f4b1476ff7565a60acdccf6f4f0dce",
          offer: "-17%",
        },
      },
    ],
  },

  // Shushi Category
  {
    category: [
      {
        id: 4,
        name: "Shushi",
        restraunt: {
          name: "Sushi World",
          image:
            "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=",
          offer: "-25%",
        },
      },
      {
        id: 5,
        name: "Shushi",
        restraunt: {
          name: "Tokyo Sushi Bar",
          image:
            "https://t4.ftcdn.net/jpg/01/35/23/71/360_F_135237184_vZnNVRuaHQZclXjxJ7ftEa3IyerhDF2y.jpg",
          offer: "-15%",
        },
      },
      {
        id: 6,
        name: "Shushi",
        restraunt: {
          name: "Sushi Hub",
          image:
            "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg",
          offer: "-10%",
        },
      },
    ],
  },

  // Pizza & Fast Food Category
  {
    category: [
      {
        id: 7,
        name: "Pizza & Fast Food",
        restraunt: {
          name: "Pizza Express",
          image:
            "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
          offer: "-35%",
        },
      },
      {
        id: 8,
        name: "Pizza & Fast Food",
        restraunt: {
          name: "Papa John’s Pizza",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8gEzoh8wrAviIrSYZRxUp8KgSK-zSGZb96CFaFYIX0aAPcRbqzPhTAxJpP4u4ISk7u0&usqp=CAU",
          offer: "-30%",
        },
      },
      {
        id: 9,
        name: "Pizza & Fast Food",
        restraunt: {
          name: "Domino’s Pizza",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
          offer: "-25%",
        },
      },
    ],
  },

  // Others Category
  {
    category: [
      {
        id: 10,
        name: "Others",
        restraunt: {
          name: "The Burger Joint",
          image: "https://assets.unileversolutions.com/v1/99096436.jpg",
          offer: "-40%",
        },
      },
      {
        id: 11,
        name: "Others",
        restraunt: {
          name: "The Salad Shop",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRHtHr_SFiwM_RucVLhOKvbej2mmpKK_ugw&s",
          offer: "-20%",
        },
      },
      {
        id: 12,
        name: "Others",
        restraunt: {
          name: "Snack Shack",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws2zUT2_CJtW1UZZkIt8iu6yRgPmkW8pl_Q&s",
          offer: "-15%",
        },
      },
    ],
  },
];

export { dealsData };
export default data;
