import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className="checkout-item">
      <div className="image-container ">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
          <div className="arrow" onClick={() => dispatch(removeItem(item))}>&#10094;</div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => dispatch(addItem(item))}>&#10095;</div>
          </div>
      <div className="price">${price}</div>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
