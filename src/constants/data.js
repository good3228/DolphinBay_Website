import images from './images';

const specials = [
  {
    title: 'dolphin bay snow',
    price: '$6.00',
    tags: '豚豚奶',
  },
  {
    title: 'Cookies & cream snow',
    price: '$5.50',
    tags: '黑炫風',
  },
  {
    title: 'mix fruit tea',
    price: '$6.00',
    tags: '綜合水果茶',
  },
  {
    title: 'float black tea',
    price: '$5.50',
    tags: '冰淇淋紅茶',
  },
  {
    title: 'pineapple slush',
    price: '$5.50',
    tags: '鳳梨冰沙',
  },
];

const favorites = [
  {
    title: 'Taro Mini Tapioca',
    price: '$6',
    tags: '芋頭椰汁西米露',
  },
  {
    title: "Mango Mini Tapioca",
    price: '$6',
    tags: '芒果椰汁西米露',
  },
  {
    title: 'Sea SaltCream Top Green Tea',
    price: '$5.50',
    tags: '海鹽奶蓋綠茶',
  },
  {
    title: 'Dolphin Bay Milk Tea + Boba',
    price: '$5.50',
    tags: '珍珠奶茶',
  },
  {
    title: 'Jasmine Green Tea + egg pudding',
    price: '$5.50',
    tags: '奶綠+布丁',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { specials, favorites, awards };
