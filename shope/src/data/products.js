import productData from '../data/productcardData';

const products = productData.map((product) => ({
  ...product,
  sizes: ["S", "M", "L", "XL"],
}));

export default products;
