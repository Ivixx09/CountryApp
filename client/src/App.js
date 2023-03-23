import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ActivityCreate from './components/CreateActivity'
import Detail from './components/Detail';
import axios from "axios";
axios.defaults.baseURL= "https://countryapp-production-d29c.up.railway.app/"

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/activity' component={ActivityCreate}/>
          <Route exact path='/home/:id' component={Detail}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
