import { getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import  productDetails  from "./productDetails.mjs";

const productID = getParam('product');
console.log(findProductById(productID));

productDetails(productID);


