import { getParam } from "./utils.mjs";
import ProductData from "./productData.mjs";
import  productDetails  from "./productDetails.mjs";

const productID = getParam('product');
console.log(ProductData.findProductById(productID));

productDetails(productID);


