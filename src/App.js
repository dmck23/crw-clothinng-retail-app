import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignUpAndSignInPage from './pages/sign-up-and-in-page/sign-up-and-in-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setCurrentUser} from './redux/user/users.action'

function App() {

  const dispatch = useDispatch();
  
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
        <Route path="/sign-in" component={SignUpAndSignInPage} />
      </Switch>
    </div>
  );
}
export default App;
