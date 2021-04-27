import './cart-dropdown.styles.scss';

import CustomButton from '../form-components/custom-button/custom-button';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = () => {

  const cartItems = useSelector(state => selectCartItems(state));

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
