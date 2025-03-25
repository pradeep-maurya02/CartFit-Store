import "./style.css";
import { showProductContainer } from "./homeProductCards";
fetch("products.json").then(response => response.json())
// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);
