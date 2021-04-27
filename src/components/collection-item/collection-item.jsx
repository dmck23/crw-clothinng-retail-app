import CustomButton from '../form-components/custom-button/custom-button';
import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux';


const CollectionItem = ({ item }) => {

  const { name, price, imageUrl} = item;

  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
