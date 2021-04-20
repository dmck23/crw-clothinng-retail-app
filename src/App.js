import './App.css';
import {  Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  )
}

export default App;