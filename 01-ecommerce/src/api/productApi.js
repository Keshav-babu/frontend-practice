// TODO — import the verbs you need from ./helpers/methodHelper

// TODO — three functions against https://dummyjson.com, no logic, just URL shaping:
//   fetchProducts(params)   -> GET /products        (params carries limit/skip for pagination)
//   fetchProductById(id)    -> GET /products/:id
//   searchProducts(q)       -> GET /products/search with q as a query param
// Each should be a single-expression arrow function that RETURNS the promise.
import { get } from "./helpers/methodHelper";

export const fetchProducts = (params) => get("/products", params);
export const fetchProductById = (id) => get(`/products/${id}`);
export const searchProducts = (q) => get("/products/search", { q });


