
import TourHome from '../src/components/Tour/TourHome'; 
import Home from '../src/components/Home/Home';
import Order from './components/Tour/Order/Order';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <div className="App">
 
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/tours">
              <TourHome></TourHome>
            </Route>

            <Route path="/tour/order">
              <Order></Order>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
