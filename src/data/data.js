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
  logo: "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/c323e6145fe44fe9aa4ff0011347ab73c5d6358d",
  downloadAppBannerImage:
    "https://s3-alpha-sig.figma.com/img/bbd5/3846/cb92a734a26973d3c7cd83699addf233?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6Oh6734nRS53YQs38rsLMiRZj9bpJPxU9CR1xI2KRdff0uFjlL9UmNJ1m4YC2MTPazvWz-7l~xIx5~PNsGG4EJTwCt-UhSVTsnHTVsUIeHeMxmwdiFIBqU0QzlfotXVqh9kHqNmsmwFsBQXS0GWlMXJaKaYcNNfUJ4nKEEhzUePf~7S-eTzjwEfNzpLoYXYjV6zEw77G~LFUbXoKvYdhIRpCEF-dvbYRrNSr-wkPJqSwQQHXrJLpcjrjMGuV03kiTyXFeJWVBVeE~V~S-1DXgHoPITP5QPDl0B6bm~9OoerM0ci4mLSDDiuIuTe5p8iddOYwShiBE3IPlWys7SxCg__",
  downloadAppStoreImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png",
  signUpAsBusiness:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/66767afc69787f183638fef25dec886650755922",
  signUpAsRider:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/2e88f031000639a9e07045824cf61f87e132b3ed",
  orderFood:
    "https://s3-alpha-sig.figma.com/img/9e86/106a/631393e760f085d14c048d525e3ef56e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyU25OYOWLwyYKIwSSnE3QnzNiU0~fz94JYexJcNf6abSF6lfv81zl4h4xY29l21hWKiaB4iAM3exBWgkMLOElpFxecfMn19Qs90xbu1LJpZWN8yEfnzbkxr4TzriwZIUBH1LQ2wc8bOaIz7FpNDI5FaEqKsUb8QZ~jmmVF1D8hKVtTsoEu3mrByVtgSGt0xKAmgL4zhC99PvO9w4pg~M4sV15xBffevEyc0ndrjSOswmfIn~LWZfmI7JIoTBl0Wd5YRcPSJlJAdHp6g0dZIdpKc1jpieQAICWTQsncFOoDADYk7T4MzbFJrXureDnUVRi~C2N1uHFPFhKDm~uOiFg__",
  food: "https://s3-alpha-sig.figma.com/img/84b2/691f/8d3c41392c27f8ba967b28c003b6511d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Upb1hTTgwUFB~KzOuzcbUqlTmCnz-RfMIQ6JtrU-ILSxosbMQOdPP~KxlyNEBBz-1JxeaT0WpbS2d6sPaPPINGPeM3qvUbKqqWP9bpVHzBcq9DVCQPFcJdT62b4X2em1V0mmkj3peRwqajV-TsQAw1tiyDtSnYeckPuwC~~1idCoVTUTA9LFvmjBzZD5b0CgXLRey77-c3vPH~~WfpZn7da9se4JbDuhIAjMdpkZlPFCesGbqxB-m-uiAlAKcvRWMeRVUKIJs0IrcFeP-rjQjhUShRz3LvbMP6TxnvcToBGwm4A4ChQsGZ9ZWbOZv4lw6VQsq~rfb84X9Fib271iIg__",
  order:
    "https://s3-alpha-sig.figma.com/img/80e6/0b66/ab934ae45238834b62ee67cff03882f6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3eYiGtvI6a5lkHJoyI2CJZs49wwduIKyZMcSi0WnLH27XyfAiKh1SIu-CNi52OvowijFvhhXqiJnb3c2fRq3SYOhKtCfUIOq4thDFIFvxeBUiUmtQV6OpLoL7gdQs7TxE7Rqld8tVHcpEPIH7gIkzuAtWd3M7xJy51l11q1qwN~3gfjwiuVsIDQcCKaWymK8nkcGJ-vkNbtzr~EbR3PTD8Y7OFOpsh-JdwTigVUACj2Bt9P3ZdI~2oz1ypMR-ZKgrIhBstn4ScKzb7IQpoSnVc9MDj9DbE8EdvDVmtCBVrKayJpD0gbRc6vMmJjslCDKBTxuE2jZf8Kc1lljko~Hw__",
  billIcon:
    "https://s3-alpha-sig.figma.com/img/1175/932b/d4f14db78877d582a7b47d491c6e44f8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLP6PetCqmEbE9Qi22vx4QrfW8IQ-sPyovDLB~vB9ptg3McsQVyYn1CGDzhPEUQHaBhbmRYJxUJ2bQgvTsuAHrrsflPEbw0fyNPSxJ6oXEGx7SheFQGo29gJLe1eClnSRNYmlE8ufW-kTyLgiWjZugAlbFliOpmgZbiLuAwxXboEXO9nGIe1gJH1WGJEWpQ5fowCHyKDA7q8ZkteFLtSQFZ8IYjjLFwAo~F3Nd0-nH0Eh~ic9CuTEPzGEvf~8ku-~G5cAgBPn5HeddtQMDwr5FMDwoOYE0D0ChWUDZIFk-X7O14nVeg~ckcfuK7woezWu1Rk3nwhV-cH2dNTm5CIYQ__",
  riderIcon:
    "https://s3-alpha-sig.figma.com/img/7e95/eb39/b37fc1f87e73356c6e975041f028a1ad?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7iBSfzo2-PRSqCiZgXiZSniCURmJUJRAam6-phGZDp~jHnh~Qj7pwBTUWZAAsTtBWB3x61rHZ65Tzmvzl5tQR-CbdnBTObBTHu-I05ohdc4CGWnj92rUKHNpengLbPHFg3k3N4Ircy2f5GfA3fR8Mg04i4rOn5BvW8UwdxEeBCQcLIwNN3Z8M3S4ggZYecnIlsmgtiSUeHJTeGgSqIqksZSJFT823hrqBJBPVYXDzcUuVsY6EKp688fQU3959Tzjw7EDefAG8M~8Z-2k5EWpEd0W-0AKcF20qGcAX-Cnmi3PxP0wKEsopGft0EE3yAMQcFpBtqFV8sA5MX-v7i0Mg__",
  clockIcon:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/f4af98ab5df4214088b46729dbecdc94f40aac6d",
  restrauntPageImage1:
    "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/5ba4c044fea2a4f9a42192c73c1f07bd6bb9953c",
  restrauntPageImage2:
    "https://s3-alpha-sig.figma.com/img/6814/9bd7/74bf16af2e8d58241b81d738de8241fc?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mNNsK1c~YZv2Xy0fLEJlzFdznVEqOI3zkzkTElQ6Q8OJWxb4jExEYpQDwhOlaZr5SaIFbHxSUEaLiryhp89eMpIilmVFlHkJa1CZY0V-fTJf0Uqw~R7h3ClufUzbsCYJpS0t9wb0-58UtXdHtq7Vy76IccQlgdD32y5jlYDXHN6ab7NMBwOqjI4vuoCJrh6WC4zMmnNI~Q3E1550oXDtbAZTKZ0LD8Ou9HQdAmnQBB-DOQyCoppYBYy4FvzC2sWBp6yrchQpZNLFudidAw1KqmJyw0hzlw4GhHx1oEy0XX4t540Lk~MrLbBgGDd0JaF400dI~jtyCQhQrRanmDg1bA__",
  restrauntPageImage3:
    "https://s3-alpha-sig.figma.com/img/5698/7e41/1c70b606338f6dee48dd33ac13bf15b2?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4i1B6YvUgLJA118O0ux7KC3LsfqEQh~28mNte~6swFgOG8PRcbxrFW7B48bd0rlGx4Ayy~2xUIBn4WpjZZzuJaO79A6xfCN~2X0AL2DTp7E2q6DTGuG8p3eP1Si4X0hbl1ElOPMwYEuaNUTtfEEQ-KpVvRWR2QO~JYIBjJqnZbSvSBKHcNmLKjEQ1rCxfbXSbDTQtqWlHieUo2BSId1bt2QbJHgq~AJdrzYLDsuOx9ve1H~Y0TROdswCxSwUiU~MXomZbwGz9LTHIPX9ZvxIzkT-q~rbxMQjB2aJa95ae~d1KdTas~-1Q-C7sSik2Cnz6s9ZaBRqKBCPdyEtBPQXQ__",
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

const categoriesData = [
  {
    id: 1,
    name: "Burgers and Fast Food",
    image:
      "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/f273401861db130d47525cdbcf113bad91763c94",
    noOfRestraunts: 21,
  },
  {
    id: 2,
    name: "Salads",
    image:
      "https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/773c61960d856bd6b70a825ca8cdb6eee4b81688",
    noOfRestraunts: 32,
  },
  {
    id: 3,
    name: "Pasta's and Casual",
    image:
      "https://s3-alpha-sig.figma.com/img/53e9/8474/80ccba9eb11af5abd3be5a6b914def0d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObyAmqjPctlkmpftiIOGUgrGfQ68s~fOCXpAEu6cKdNFtzKOXcBk-TONCIrhknDkQUgpti0XrwM~d7YdtfLLEDvRTyK0VWTihudKdoMK6oQSzEpzmEaqdlNz7HklhNSNLxfRB54BhnssOTCY2LPkjGmQhdgC8FwzJmAOhGWUNJ2rh2ubpjUNAaXBRs8YfSTSzGQOJNpq4xYdzIIqDYFckpJePdZ3xPbVAveaI-pFOsDniX5RuT8XbfJRyhNru2W-gwu2ULtTTvVE0BDi0TUQwlqpeRm0J27vm3STvQLdHYwnIhIUqELx6lHOUrCXVkHZexYTutLlD26~O745HqPpfQ__",
    noOfRestraunts: 4,
  },
  {
    id: 4,
    name: "Pizza",
    image:
      "https://s3-alpha-sig.figma.com/img/5c9c/3c0f/bebb21d6d7bd08fb3850ede5c9eb9d9e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LFPUTGjaCWLhWVnrUDyhohwlVQvd1lFqRxQU8q3otvV24mKFLpgAooeRAkR6D0zDc~~8X2aUnysHZIjDJs3wLhpPEiRRhtAqcWU4fnos3AsfM3Mi~5cv260HaCAQuYXcijEqULe-vvEsyZaEGRb2nwLSoviP7SYPria4Fenw3w8JKEqyk1S3rgBN-8znvhwMd~yYlruTpj0k~qJHtOEtJ6OLT0dd~y3o5OLH3l59okS4jsgxZaK8EI~zv-ftLX5CPfU5Nk5U2Bw2D6zVifKK9B6rYKdxBx6xGAcRBcbm8F-g5bpa4mQ-z6N4MtwRjUQsPLYvFJluJV6-~pvSsVhjXQ__",
    noOfRestraunts: 32,
  },

  {
    id: 5,
    name: "Breakfast",
    image:
      "https://s3-alpha-sig.figma.com/img/a724/61e4/3ce636c9a873a6a923e0ea5532729119?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFUjYi94tyj~ta2bnm6V99Y63oxG2rtVEP9rlbt5XIxGcRuHEasJJzttFSHz2V8TYEXTSwR01VYkHSSVfpgYNjFN0KFUNETtTFiAuqYaIrDj3almFKXO3bGhm07bnMpYwtDtzWcvZteDXlBsg9UxHBHmg2gYfhTWG-R~4Zus73B-z53Yy7dTTigMSneOtAcbfIFxk8kYfvNYQmlsvhr1SrFeDc0NGs6HpHSFoxj7Lboq8sW6RB7xqXx6YwoXyEHFz2EeOlXmTfpji4HYRrPq8v8ih0llvZWdI~fVtR9tYJF1V90EQXOUnguz~yZdMH1DvGGVJ3rwB-eHyawSziVZGg__",
    noOfRestraunts: 4,
  },
  {
    id: 6,
    name: "Soups",
    image:
      "https://s3-alpha-sig.figma.com/img/1eb7/4c10/99f1cab96bf53e18d686012e3aece6c7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5rNx88ZScv7M5cA7tf2WgAzXonAu7eaYwbP~mBsKPvkWDB2JO8bS44FndJ5HKLzTLBnjj9rwIcgJt1vx1As-xisjHaSFbABLwAMiXc82XxbCFnRzZaDYwnXdB3G4hQ1khGJ~3mheG~QYPWy3v5vmMYYYCYwa1ZDQTAN2BGp46gNj~nbZO5K8Qpl-BGLJ-WPYI-xSk1tk6JWV-xnXTQsKWGEN4dp0wZteOTIEEAmdqZrtUah8ioL2~nJBD4DpgD2rfWdvW3u-ofzK3U02sOXCcEoJDlhOKXAsfEB6QIZu8u9DccXodZVMBxHwZRdU56O0zTJPLtTzStsZ3kiA3xPbw__",
    noOfRestraunts: 32,
  },
];
export { dealsData, categoriesData };
export default data;
