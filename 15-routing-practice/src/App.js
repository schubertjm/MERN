import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Values from './components/Values';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex">
          <h1>Routing Practice</h1>
          <ul className="flex">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/hello">Hello</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/home">
            <h2>Welcome</h2>
          </Route>
          <Route exact path="/hello">
            <h2>The word is: hello</h2>
          </Route>
          <Route exact path="/:value/:fontColor/:backColor">
            <Values></Values>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
