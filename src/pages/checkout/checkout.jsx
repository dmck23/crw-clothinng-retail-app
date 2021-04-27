import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectTotalPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${subtotal}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
