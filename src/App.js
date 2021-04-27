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

function App() {

  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser);
  
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
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" render={() => currentUser ? (<Redirect to='/' />) : (<SignUpAndSignInPage />) } />
      </Switch>
    </div>
  );
}
export default App;
