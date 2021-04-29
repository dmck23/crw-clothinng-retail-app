import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = () => {
  const match = useRouteMatch();

  const collection = useSelector(selectCollection(match.params.collectionId));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
