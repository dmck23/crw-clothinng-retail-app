import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignUpAndSignInPage from './pages/sign-up-and-in-page/sign-up-and-in-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser} from './redux/user/users.action'
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout';

function App() {

  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  
  useEffect(() => {

    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          }));
        });
      } else {
          dispatch(setCurrentUser(userAuth));
      }
      
    });
 
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" render={() => currentUser ? (<Redirect to='/' />) : (<SignUpAndSignInPage />) } />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
