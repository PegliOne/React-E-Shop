import { getCartItems } from "../../services/cart-service";

export const checkItemInCart = (title, variantTitle) => {
  return getCartItems().then((cartItems) => {
    const existingItems = cartItems.filter(
      (cartItem) => cartItem.title === title
    );

    return existingItems?.some(
      (existingItem) => existingItem.variantTitle === variantTitle
    );
  });
};

export const checkItemAvailability = (
  variants,
  variantTitle,
  selectedQuantity
) => {
  const selectedVariant = variants.find(
    (variant) => variant.title === variantTitle
  );
  return selectedVariant.quantity >= selectedQuantity;
};

export const getCartItem = (title, form) => {
  const formData = new FormData(form);
  const cartItem = {
    title: title,
    variantTitle: formData.get("variantTitle"),
    quantity: Number(formData.get("quantity")),
  };
  return cartItem;
};
