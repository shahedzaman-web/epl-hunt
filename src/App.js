
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Error from './Components/Error/Error';


library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    
    
      <Switch>
        <Route exact path="/">
        <Background/>
        
         <Home/>

         <Footer/>
        </Route>
        <Route path="/home">
        <Background/>
         <Home/>
         <Footer/>
        </Route>

        <Route path="/details/:strTeam">
          
          <Background/>
          <Details/>
         <Footer/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>

  </Router>
  );
}

export default App;
