import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  "pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec",
  true
);

export async function fetchProducts() {
  const products = await commerce.products.list();
  return products;
}

export async function fetchCart() {
  const cart = await commerce.cart.retrieve();
  return cart;
}

export async function handleAddToCart(productId, quantity = 1) {
  const cart = await commerce.cart.add(productId, quantity);
  return cart;
}
