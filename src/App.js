import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
//we need to surround our entire app with the Router component: tha means we can use the Router in the entire app, all components that are nested inside this app component have access to the Router
// the Switch component makes sure that only one Route shows at any one time
//rafce
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
