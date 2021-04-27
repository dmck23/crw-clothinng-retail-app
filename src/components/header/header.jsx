import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hideDropdown = useSelector((state) => state.cart.hidden);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hideDropdown ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
