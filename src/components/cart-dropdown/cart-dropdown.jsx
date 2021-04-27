import './cart-dropdown.styles.scss';

import CustomButton from '../form-components/custom-button/custom-button';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '.././../redux/cart/cart.actions';

const CartDropdown = () => {
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
