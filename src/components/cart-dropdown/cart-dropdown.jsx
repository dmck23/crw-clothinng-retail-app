import './cart-dropdown.styles.scss';

import CustomButton from '../form-components/custom-button/custom-button';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.key} item={item}/>)}
      </div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
