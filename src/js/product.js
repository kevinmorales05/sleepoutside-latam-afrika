import { getParam } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";
import productDetails from "./productDetails.mjs";

const productID = getParam("product");
console.log(findProductById(productID));

productDetails(productID);
