import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/adam-dcosta-portfolio/projects">
            <FeaturedProjects />
          </Route>
          <Route path="adam-dcosta-portfolio/about">
            <About />
          </Route>
          
        </Switch>


      </div>

    </Router>

  );
}

export default App;
