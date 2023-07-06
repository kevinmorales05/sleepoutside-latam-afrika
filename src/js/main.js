
import { loadHeaderFooter, updateCartItemCount } from "./utils.mjs";
import Alert from './Alert.js';

const alert = new Alert();
alert.initialize();

loadHeaderFooter();
updateCartItemCount();


