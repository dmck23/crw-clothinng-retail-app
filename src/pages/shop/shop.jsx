import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = () => {
  
  const match = useRouteMatch();

  return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  );
}

export default ShopPage;
