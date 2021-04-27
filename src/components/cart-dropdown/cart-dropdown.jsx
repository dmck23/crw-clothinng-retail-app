import './cart-dropdown.styles.scss';

import CustomButton from '../form-components/custom-button/custom-button';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
