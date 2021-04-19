import './App.css';
import {  Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';

const Hats = () => {
  return(
    <div>Hats
    </div>
  )
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={Hats} />
    </Switch>
  )
}

export default App;