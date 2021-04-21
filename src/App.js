import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignUpAndSignInPage from './pages/sign-up-and-in-page/sign-up-and-in-page';
import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    }

  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path='/sign-in' component={SignUpAndSignInPage} />
      </Switch>
    </div>
  );
}

export default App;
