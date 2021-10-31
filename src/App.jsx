import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/projects">

          </Route>
          
        </Switch>


      </div>

    </Router>

  );
}

export default App;
