import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview';
import './collection-overview.styles.scss';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
