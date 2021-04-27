import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
    0
  ));

export const selectDropdownHidden = createSelector(selectCart, (cart) => cart.hidden);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) => cartItems.reduce(
    (totalPrice, cartItem) =>
    totalPrice + (cartItem.quantity * cartItem.price),
    0
  ))