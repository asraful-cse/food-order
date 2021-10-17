import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import BreakFast from './Components/BreakFast/BreakFast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import './App.css'
import BreakFastDetails from './Components/BreakFast/BreakFastDetails';
function App() {
  return (
    <div >
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/breakfast">
            <BreakFast></BreakFast>
          </Route>
          <Route exact path="/brekfastitems/:breakfastId">
         <BreakFastDetails></BreakFastDetails>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
