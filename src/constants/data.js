import images from "./images";

const specials = [
  {
    title: "dolphin bay snow",
    price: "$6.00",
    tags: "豚豚奶",
  },
  {
    title: "Cookies & cream snow",
    price: "$5.50",
    tags: "黑炫風",
  },
  {
    title: "mix fruit tea",
    price: "$6.00",
    tags: "綜合水果茶",
  },
  {
    title: "float black tea",
    price: "$5.50",
    tags: "冰淇淋紅茶",
  },
  {
    title: "pineapple slush",
    price: "$5.50",
    tags: "鳳梨冰沙",
  },
];

const favorites = [
  {
    title: "Taro Mini Tapioca",
    price: "$6",
    tags: "芋頭椰汁西米露",
  },
  {
    title: "Mango Mini Tapioca",
    price: "$6",
    tags: "芒果椰汁西米露",
  },
  {
    title: "Sea SaltCream Top Green Tea",
    price: "$5.50",
    tags: "海鹽奶蓋綠茶",
  },
  {
    title: "Dolphin Bay Milk Tea + Boba",
    price: "$5.50",
    tags: "珍珠奶茶",
  },
  {
    title: "Jasmine Green Tea + egg pudding",
    price: "$5.50",
    tags: "奶綠+布丁",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const menu = [
  {
    id: 1,
    title: "Spicy Wontons 紅油抄手",
    category: "Appetizers",
    price: 10,
    desc: "Homemade pork wontons served in soy sauce, vinegar, and homemade chili oil. Please allow 12-15 minutes for preparation.",
  },
  {
    id: 2,
    title: "Oyster / Shrimp Omelet 蚵仔煎/蝦仁煎",
    category: "Appetizers",
    price: 9.5,
    desc: "Traditional Taiwanese dish combining your choice of oysters or shrimp with eggs and vegetables into an omelet with a lightly crispy edge and a mochi-like center.",
  },
  {
    id: 3,
    title: "Beef Shank 滷牛腱",
    category: "Appetizers",
    price: 9.5,
    desc: "Tender slices of braised beef shank drizzled with garlic sauce, soy sauce paste, and homemade chili oil.",
  },
  {
    id: 4,
    title: "Popcorn Chicken 鹽酥雞",
    category: "Appetizers",
    price: 8,
    desc: "Tender bites of dark meat breaded, fried, and seasoned with pepper salt. Choose from mild, medium, hot, or none.",
  },
  {
    id: 5,
    title: "Chicken Wings 脆皮炸雞翅",
    category: "Appetizers",
    price: 8,
    desc: "6 wings and drumettes fried to order.",
  },
  {
    id: 6,
    title: "Pork Chop 酥炸排骨/椒鹽排骨",
    category: "Appetizers",
    price: 7.75,
    desc: "Bone-in pork chop fried to order. Choose from crispy or salt & pepper.",
  },
  {
    id: 7,
    title: "Crispy Chicken Cutlet 酥炸雞排",
    category: "Appetizers",
    price: 7.5,
    desc: "Cutlet of white meat fried to order.",
  },
  {
    id: 8,
    title: "Chicken Thigh 炸雞腿/滷雞腿",
    category: "Appetizers",
    price: 7.5,
    desc: "Marinated and slow-cooked chicken thigh with drumstick lightly fried or braised. Choose from crispy or braised.",
  },
  {
    id: 9,
    title: "Braised Pig Feet 滷豬腳",
    category: "Appetizers",
    price: 7.25,
    desc: "Pig feet slow-cooked in soy sauce, garlic, ginger, and spices.",
  },
  {
    id: 10,
    title: "Taiwanese Sausage 台式香腸",
    category: "Appetizers",
    price: 6.75,
    desc: "Pork sausages containing garlic, spices, and sugar for a hint of sweetness. Served with sliced raw garlic.",
  },
  {
    id: 11,
    title: "Beef Stuffed Pancake 牛肉捲餅",
    category: "Appetizers",
    price: 9.75,
    desc: "Taiwanese scallion pancake grilled and stuffed with slices of beef and brushed with sauce.",
  },
  {
    id: 12,
    title: "Dan Bing (Egg Pancake) 蛋餅",
    category: "Appetizers",
    price: 8,
    desc: "Taiwanese scallion pancake grilled with an egg and served with sweet garlic soy sauce.",
  },
  {
    id: 13,
    title: "Appetizer Combo 小菜拼盤",
    category: "Appetizers",
    price: 8,
    desc: "A sampler portion of our bean curd, seaweed, and braised egg. Also available a la carte.",
  },
  {
    id: 14,
    title: "Bean Curd 滷豆乾",
    category: "Appetizers",
    price: 6,
    desc: "Braised dried tofu served in soy sauce paste.",
  },
  {
    id: 15,
    title: "Seasoned Seaweed 涼拌海帶",
    category: "Appetizers",
    price: 6,
    desc: "Strips of seaweed flavored with ginger, garlic, and vinegar.",
  },
  {
    id: 16,
    title: "Takoyaki 章魚燒",
    category: "Appetizers",
    price: 9.5,
    desc: "Snack-sized balls of batter filled with diced octopus, pickled ginger, and green onion. Topped with sauce and bonito flakes.",
  },
  {
    id: 17,
    title: "Sweet Potato Fries 香脆地瓜條",
    category: "Appetizers",
    price: 5,
    desc: "Chopped sweet potato fried to order and sprinkled with sugar.",
  },
  {
    id: 18,
    title: "Fried Squid Balls 炸花枝丸",
    category: "Appetizers",
    price: 6,
    desc: "Taiwanese-style squid balls fried to order and seasoned with pepper salt.",
  },
  {
    id: 19,
    title: "Boiled Vegetables 燙青菜",
    category: "Appetizers",
    price: 9,
    desc: "Seasonal vegetables cooked and garnished with our house special sauce. Topped with a scoop of our ground pork.",
  },
  {
    id: 20,
    title: "Small Pork Rice 小肉燥飯",
    category: "Appetizers",
    price: 6,
    desc: "Sampler portion of rice topped with our homemade ground pork.",
  },
  {
    id: 21,
    title: "Steamed Egg 蒸蛋",
    category: "Appetizers",
    price: 6,
    desc: "Eggs beaten and steamed. Topped with a scoop of our ground pork. Limited to Tuesdays, Thursdays, and Sundays.",
  },
  {
    id: 22,
    title: "Pan-fried/Braised Egg 荷包蛋/滷蛋",
    category: "Appetizers",
    price: 2,
    desc: "Your choice of pan-fried or braised egg.",
  },
  {
    id: 23,
    title: "White Rice/Noodles 白飯/麵",
    category: "Appetizers",
    price: 2,
    desc: "Your choice of white rice or noodles.",
  },
  {
    id: 24,
    title: "16 oz Ground Pork 手工肉燥（小）",
    category: "Appetizers",
    price: 12,
    desc: "16 oz of our homemade ground pork. Great at home over rice and noodles. Can also be sprinkled over various dishes for a pop of flavor.",
  },
  {
    id: 25,
    title: "32 oz Ground Pork 手工肉燥（大）",
    category: "Appetizers",
    price: 20,
    desc: "32 oz of our homemade ground pork. Great at home over rice and noodles. Can also be sprinkled over various dishes for a pop of flavor.",
  },
  {
    id: 26,
    title: "Frozen Wontons 冷凍餛飩",
    category: "Appetizers",
    price: 23,
    desc: "Approximately 40 of our homemade frozen wontons, perfect for a quick and easy meal.",
  },
  {
    id: 27,
    title: "Crispy Pork Chop 酥炸排骨麵",
    category: "Noodle Soup",
    price: 12.25,
    desc: "Served with a bone-in pork chop, breaded and fried to order.",
  },
  {
    id: 28,
    title: "Salt & Pepper Pork Chop 椒鹽排骨麵",
    category: "Noodle Soup",
    price: 12.25,
    desc: "Served with a bone-in pork chop fried without breading and seasoned with pepper salt.",
  },
  {
    id: 29,
    title: "Salted Vegetable & Pork 雪菜肉絲麵",
    category: "Noodle Soup",
    price: 12,
    desc: "Shredded pork, salted mustard greens, and noodles cooked in a light broth.",
  },
  {
    id: 30,
    title: "Wonton 餛飩麵",
    category: "Noodle Soup",
    price: 12,
    desc: "Served with our homemade wontons. Please allow 12-15 minutes for preparation.",
  },
  {
    id: 31,
    title: "Braised Beef 紅燒牛肉麵",
    category: "Noodle Soup",
    price: 12.25,
    desc: "Choose from Half Tendon Half Meat, All Meat, or All Tendon. Choose from mild, medium, hot, or none. Our signature beef broth with slices of beef shank, tendon, seasonal vegetables, and scallion.",
  },
  {
    id: 32,
    title: "Crispy Chicken Cutlet 酥炸雞排麵",
    category: "Noodle Soup",
    price: 12,
    desc: "Served with a juicy chicken cutlet, breaded and fried to order.",
  },
  {
    id: 33,
    title: "Chicken Thigh 炸雞腿麵/滷雞腿麵",
    category: "Noodle Soup",
    price: 12,
    desc: "Choose from crispy or braised. Served with a chicken thigh and drumstick, lightly fried or braised.",
  },
  {
    id: 34,
    title: "Basil Chicken 三杯雞",
    category: "Stir Fry",
    price: 14,
    desc: "Bite-sized pieces of chicken with cloves of garlic and basil.",
  },
  {
    id: 35,
    title: "Pork & Bamboo 筍尖肉絲",
    category: "Stir Fry",
    price: 14,
    desc: "Shredded pork, bamboo shoots, and garlic.",
  },
  {
    id: 28,
    title: "Pork & Bean Curd 豆乾肉絲",
    category: "Stir Fry",
    price: 14,
    desc: "Shredded pork, bean curd, basil, and garlic.",
  },
  {
    id: 36,
    title: "Egg & Tomato 番茄炒蛋",
    category: "Stir Fry",
    price: 14,
    desc: "Scrambled eggs, fresh tomato, and scallion.",
  },
  {
    id: 37,
    title: "Seasonal Grenns & Garlic 蒜炒青菜",
    category: "Stir Fry",
    price: 14,
    desc: "- Choose between:\n- Cabbage.\n- Broccoli.\n- A菜.\n- Bok Choy.",
  },
  {
    id: 38,
    title: "Jalapeño Gravy Rice 小椒燴飯",
    category: "Rice Dishes",
    price: 14,
    desc: "Choice of chicken or beef. Homemade jalapeño gravy containing carrot, onion, jalapeño, assorted greens, and meat.",
  },
  {
    id: 39,
    title: "Popcorn Chicken Rice 鹽酥雞飯",
    category: "Rice Dishes",
    price: 12,
    desc: "Choose from mild, medium, hot, or no spice. Tender bites of dark meat breaded, fried, and seasoned with pepper salt.",
  },
  {
    id: 40,
    title: "Chicken Wings Rice 脆皮炸雞翅飯",
    category: "Rice Dishes",
    price: 12.25,
    desc: "Wings and drumettes fried to order.",
  },
  {
    id: 41,
    title: "Crispy Chicken Cutlet Rice 酥炸雞排飯",
    category: "Rice Dishes",
    price: 12,
    desc: "Cutlet of white meat fried to order.",
  },
  {
    id: 42,
    title: "Chicken Thigh Rice 炸雞腿/滷雞腿",
    category: "Rice Dishes",
    price: 12,
    desc: "Choose from crispy or braised. Chicken thigh with drumstick served lightly fried or braised.",
  },
  {
    id: 43,
    title: "Black Beans & Pork Rice 蒼蠅頭飯",
    category: "Rice Dishes",
    price: 11.5,
    desc: "Fermented black soybeans and garlic chives stir-fried with a scoop of ground pork. Non-spicy version also available upon request.",
  },
  {
    id: 44,
    title: "Pork Rice 大肉燥飯",
    category: "Rice Dishes",
    price: 10.5,
    desc: "Topped with a heaping portion of our homemade ground pork.",
  },
  {
    id: 45,
    title: "Taiwanese Sausage Rice 台式香腸飯",
    category: "Rice Dishes",
    price: 12,
    desc: "Homemade pork sausages flavored with garlic, spices, and a pinch of sugar for a hint of sweetness.",
  },
  {
    id: 46,
    title: "Braised Pork Belly Rice 控肉飯",
    category: "Rice Dishes",
    price: 12,
    desc: "Pork belly slow-cooked with soy sauce, garlic, ginger, and spices.",
  },
  {
    id: 47,
    title: "Braised Pig Feet Rice 滷豬腳飯",
    category: "Rice Dishes",
    price: 12,
    desc: "Pig feet slow-cooked in soy sauce, garlic, ginger, and spices.",
  },
  {
    id: 48,
    title: "Shrimp Fried Rice 蝦仁蛋炒飯",
    category: "Fried Rice",
    price: 14,
    desc: "Fried rice with shrimp, eggs, scallions, and onions.",
  },
  {
    id: 49,
    title: "Taiwanese Sausage Fried Rice 香腸蛋炒飯",
    category: "Fried Rice",
    price: 14,
    desc: "Fried rice with Taiwanese sausage, eggs, scallions, and onions.",
  },
  {
    id: 50,
    title: "Ham Fried Rice 火腿蛋炒飯",
    category: "Fried Rice",
    price: 14,
    desc: "Fried rice with ham, eggs, scallions, and onions.",
  },
  {
    id: 51,
    title: "Chicken Fried Rice 雞肉蛋炒飯",
    category: "Fried Rice",
    price: 14,
    desc: "Fried rice with chicken, eggs, scallions, and onions.",
  },
  {
    id: 52,
    title: "Salted Vegetable & Pork Fried Rice 雪菜肉絲蛋炒飯",
    category: "Fried Rice",
    price: 14,
    desc: "Fried rice with salted vegetable, pork, eggs, scallions, and onions.",
  },
  {
    id: 53,
    title: "Stir-Fried Udon 台式炒烏龍",
    category: "Dry Noodles",
    price: 14,
    desc: "Udon noodles with carrot, onion, and assorted greens. Choose from pork or chicken.",
  },
  {
    id: 54,
    title: "Jalapeno Gravy 小椒燴麵",
    category: "Dry Noodles",
    price: 14,
    desc: "Homemade jalapeño gravy with carrot, onion, jalapeño, assorted greens, and meat. Choose from beef or chicken.",
  },
  {
    id: 55,
    title: "Stir-Fried Noodles 台式炒麵",
    category: "Dry Noodles",
    price: 13.5,
    desc: "Noodles with carrot, onion, and assorted greens. Choose from pork or chicken.",
  },
  {
    id: 56,
    title: "Stir-Fried Rice Noodles 台式炒米粉",
    category: "Dry Noodles",
    price: 13.5,
    desc: "Rice noodles with carrot, onion, and assorted greens. Choose from pork or chicken.",
  },
  {
    id: 57,
    title: "Spicy Wonton Noodles 餛飩辣拌麵",
    category: "Dry Noodles",
    price: 13.5,
    desc: "Noodles tossed with chili oil and soy sauce, topped with ground pork and our homemade wontons. Please allow 12-15 minutes for preparation.",
  },
  {
    id: 58,
    title: "Sesame Noodles 芝麻麵",
    category: "Dry Noodles",
    price: 11,
    desc: "Noodles with scallion, assorted greens, and ground pork. Served with homemade sesame paste. Contains traces of peanut.",
  },
  {
    id: 59,
    title: "Ground Pork Noodles 肉燥麵",
    category: "Dry Noodles",
    price: 11,
    desc: "Noodles tossed with garlic and soy paste, topped with a generous portion of ground pork.",
  },
  {
    id: 60,
    title: "Wonton",
    category: "Soup",
    price: 10,
    desc: "餛飩湯",
  },
  {
    id: 61,
    title: "Braised beef soup",
    category: "Soup",
    price: 11,
    desc: "牛肉湯",
  },
  {
    id: 62,
    title: "Squid ball",
    category: "Soup",
    price: 8,
    desc: "花枝丸湯",
  },
  {
    id: 63,
    title: "Egg flower",
    category: "Soup",
    price: 7,
    desc: "蛋花湯",
  },
  {
    id: 64,
    title: "Egg Fried Rice 蛋炒飯",
    category: "Vegetarian Options",
    price: 14,
    desc: "Fried rice with eggs. scallion, onion, and bean curd.",
  },
  {
    id: 65,
    title: "Vegetarian Sesame Noodles 素芝麻麵",
    category: "Vegetarian Options",
    price: 12,
    desc: "Noodles with scallion, assorted greens, and bean curd. Served with homemade sesame paste. Contains traces of peanut.",
  },
  {
    id: 66,
    title: "Vegetarian Stir-fried Udon 台式炒烏龍",
    category: "Vegetarian Options",
    price: 14,
    desc: "Udon noodles with bean curd. carrot. onion, and assorted greens",
  },
  {
    id: 67,
    title: "Boiled Vegetable 燙青菜",
    category: "Vegetarian Options",
    price: 8.5,
    desc: "Seasonal vegetables cooked and garnished with our house special sauce. Without ground pork like our standard version.",
  },
  {
    id: 68,
    title: "Vegetarian Stir-fried Noodles 台式炒麵",
    category: "Vegetarian Options",
    price: 13.5,
    desc: "Noodles with bean curd. carrot. onion, and assorted greens.",
  },
  {
    id: 69,
    title: "Vegetarian Stir-fried Rice Noodles 台式炒米粉",
    category: "Vegetarian Options",
    price: 13.5,
    desc: "Rice noodles with bean curd. carrot, onion. and assorted greens.",
  },
];

const drinks = [
  {
    id: 10,
    type: "House specials",
    showType: "House specials 海豚灣特調",
    price: 6,
    desc: "",
    items: [
      {
        engTitle: "Dolphin bay snow",
        chiTitle: "豚豚奶",
        price: 6,
      },
      {
        engTitle: "Pineapple slush",
        chiTitle: "鳳梨冰沙",
        price: 5.5,
      },
      {
        engTitle: "Mix fruit tea",
        chiTitle: "綜合水果茶",
        price: 6,
      },
      {
        engTitle: "Float black tea",
        chiTitle: "冰淇淋紅茶",
        price: 5.5,
      },
      {
        engTitle: "Cookies & Cream",
        chiTitle: "黑炫風",
        price: 5.5,
      },
    ],
  },
  {
    id: 4,
    type: "Mini Tapioca",
    showType: "Mini Tapioca 西米露",
    price: 6,
    desc: "Made fresh with lactose-free milk. Can be made iced or hot.",
    items: [
      {
        engTitle: "Taro coconut",
        chiTitle: "芋頭椰汁",
      },
      {
        engTitle: "Coconut",
        chiTitle: "椰汁",
      },
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },
    ],
  },
  {
    id: 8,
    type: "Milk tea",
    showType: "Milk tea 奶茶",
    price: 5,
    desc: "Can be made iced or hot. Substitute with fresh milk for $1.",
    items: [
      {
        engTitle: "Dolphin Bay",
        chiTitle: "海豚灣",
      },
      {
        engTitle: "Taro",
        chiTitle: "芋頭",
      },
      {
        engTitle: "Coffee",
        chiTitle: "咖啡",
      },
      {
        engTitle: "Brown sugar",
        chiTitle: "黑糖",
      },
      {
        engTitle: "Matcha",
        chiTitle: "抹茶",
      },
      {
        engTitle: "Thai",
        chiTitle: "泰式",
      },
      {
        engTitle: "Jasmine green",
        chiTitle: "奶綠",
      },
      {
        engTitle: "Honey",
        chiTitle: "蜂蜜",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },

      {
        engTitle: "Honey green",
        chiTitle: "蜂蜜奶綠",
      },
      {
        engTitle: "Lavander",
        chiTitle: "薰衣草",
      },
      {
        engTitle: "Ginger",
        chiTitle: "薑母",
      },
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
    ],
  },
  {
    id: 9,
    type: "Tea",
    showType: "Tea 茶",
    price: 4.75,
    desc: "Pair with either green tea or black tea. Can be made iced or hot.",
    items: [
      {
        engTitle: "Passion fruit",
        chiTitle: "百香果",
      },
      {
        engTitle: "Plum",
        chiTitle: "梅子",
      },
      {
        engTitle: "Yogurt",
        chiTitle: "養樂多",
      },
      {
        engTitle: "Honey lemon",
        chiTitle: "蜂蜜檸檬",
      },
      {
        engTitle: "Lemon",
        chiTitle: "檸檬",
      },
      {
        engTitle: "Honey",
        chiTitle: "蜂蜜",
      },
      {
        engTitle: "Honey grapefruit",
        chiTitle: "蜂蜜葡萄柚",
      },
      {
        engTitle: "Grapefruit",
        chiTitle: "葡萄柚",
      },
      {
        engTitle: "Peach",
        chiTitle: "水蜜桃",
      },

      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Lychee",
        chiTitle: "荔枝",
      },
      {
        engTitle: "Ginger",
        chiTitle: "薑母",
      },
      {
        engTitle: "Wintermelon",
        chiTitle: "冬瓜",
      },
      {
        engTitle: "Iced tea",
        chiTitle: "泡沫",
      },
    ],
  },
  {
    id: 7,
    type: "Snow",
    showType: "Snow 雪泡",
    price: 5,
    desc: "Creamy slushee drinks",
    items: [
      {
        engTitle: "Red bean",
        chiTitle: "紅豆沙",
      },
      {
        engTitle: "Green bean",
        chiTitle: "綠豆沙",
      },
      {
        engTitle: "Taro",
        chiTitle: "芋頭",
      },
      {
        engTitle: "Lychee",
        chiTitle: "荔枝",
      },
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Peach",
        chiTitle: "水蜜桃",
      },
      {
        engTitle: "Plum",
        chiTitle: "梅子",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },
      {
        engTitle: "Passion fruit",
        chiTitle: "百香果",
      },
      {
        engTitle: "Matcha",
        chiTitle: "抹茶",
      },
      {
        engTitle: "Peach",
        chiTitle: "水蜜桃",
      },
    ],
  },
  {
    id: 6,
    type: "Slush",
    showType: "Slush 冰沙",
    price: 5,
    desc: "Blended slushee drinks.",
    items: [
      {
        engTitle: "Passion fruit",
        chiTitle: "百香果",
      },
      {
        engTitle: "Lychee",
        chiTitle: "荔枝",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },
      {
        engTitle: "Lemon",
        chiTitle: "檸檬",
      },
      {
        engTitle: "Plum",
        chiTitle: "梅子",
      },
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Peach",
        chiTitle: "水蜜桃",
      },
      {
        engTitle: "Yogurt",
        chiTitle: "養樂多",
      },
    ],
  },
  {
    id: 3,
    type: "Milk",
    showType: "Milk 牛奶",
    price: 5.5,
    desc: "Made fresh with lactose-free milk. Can be made iced or hot. * means iced only.",
    items: [
      {
        engTitle: "Brown sugar",
        chiTitle: "黑糖",
      },
      {
        engTitle: "Taro",
        chiTitle: "芋頭",
      },
      {
        engTitle: "Red bean",
        chiTitle: "紅豆",
      },
      {
        engTitle: "Green bean",
        chiTitle: "綠豆",
      },
      {
        engTitle: "Strawberry banana*",
        chiTitle: "草莓香蕉",
      },
      {
        engTitle: "Strawberry*",
        chiTitle: "草莓",
      },
      {
        engTitle: "Mango*",
        chiTitle: "芒果",
      },
      {
        engTitle: "Coffee*",
        chiTitle: "咖啡",
      },
      {
        engTitle: "Coconut*",
        chiTitle: "椰香",
      },
      {
        engTitle: "Banana*",
        chiTitle: "香蕉",
      },
    ],
  },
  {
    id: 2,
    type: "Juice",
    showType: "Juice 果汁",
    price: 5.5,
    desc: "Freshly blended fruit juices",
    items: [
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },
      {
        engTitle: "Peach",
        chiTitle: "水蜜桃",
      },
      {
        engTitle: "Honey lemon",
        chiTitle: "蜂蜜檸檬",
      },
      {
        engTitle: "Lemon",
        chiTitle: "檸檬",
      },
      {
        engTitle: "Lychee",
        chiTitle: "荔枝",
      },
      {
        engTitle: "Honey grapefruit",
        chiTitle: "蜂蜜葡萄柚",
      },
      {
        engTitle: "Grapefruit",
        chiTitle: "葡萄柚",
      },
    ],
  },
  {
    id: 1,
    type: "Oolong",
    showType: "Oolong 埔里高山烏龍茶",
    price: 8,
    desc: "Prized Oolong tea imported from our hometown -- Pull, Taiwan 24 OZ",
    items: [
      {
        engTitle: "Cream Top Oolong",
        chiTitle: "奶蓋烏龍茶",
      },
      {
        engTitle: "Oolong(Unsweetened)",
        chiTitle: "原味烏龍茶",
      },
      {
        engTitle: "Oolong milk tea",
        chiTitle: "烏龍奶茶",
      },
      {
        engTitle: "Oolong(Sweetened)",
        chiTitle: "泡沫烏龍茶",
      },
    ],
  },
  {
    id: 5,
    type: "Sea salt cream top tea",
    showType: "Sea salt cream top tea 海鹽奶蓋茶",
    price: 5,
    desc: "Sweetened iced tea topped with homemade sea salt cream.",
    items: [
      {
        engTitle: "Jasmine green tea",
        chiTitle: "綠茶",
      },
      {
        engTitle: "Black tea",
        chiTitle: "紅茶",
      },
      {
        engTitle: "Wintermelon tea",
        chiTitle: "冬瓜茶",
      },
    ],
  },
  {
    id: 11,
    type: "Shaved ice",
    showType: "Shaved ice 刨冰",
    price: 12,
    desc: "Choose up to 4 toppings. Additional toppings for $0.5 each.",
    items: [
      {
        engTitle: "Egg pudding",
        chiTitle: "綠茶",
      },
      {
        engTitle: "Grass jelly",
        chiTitle: "仙草",
      },
      {
        engTitle: "Strawberry",
        chiTitle: "草莓",
      },
      {
        engTitle: "Red Bean",
        chiTitle: "紅豆",
      },
      {
        engTitle: "Aloe",
        chiTitle: "蘆薈",
      },
      {
        engTitle: "Mango",
        chiTitle: "芒果",
      },
      {
        engTitle: "Green bean",
        chiTitle: "綠豆",
      },
      {
        engTitle: "Fresh taro",
        chiTitle: "新鮮芋頭",
      },
      {
        engTitle: "Tapioca",
        chiTitle: "波霸",
      },
      {
        engTitle: "Coconut jelly",
        chiTitle: "椰果",
      },
      {
        engTitle: "Condensed milk",
        chiTitle: "煉乳",
      },
      {
        engTitle: "Mini tapioca",
        chiTitle: "西米露",
      },
    ],
  },
];

export default { specials, favorites, awards, menu, drinks };
