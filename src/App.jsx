import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/adam-dcosta-portfolio">
            <Header />
          </Route>
          <Route path="/adam-dcosta-portfolio/projects">
            <FeaturedProjects />
          </Route>
          <Route path="/adam-dcosta-portfolio/skills">
            <Skills />
          </Route>
          <Route path="/adam-dcosta-portfolio/about">
            <About />
          </Route>
          <Route path="/adam-dcosta-portfolio/contact">
            <Contact />
          </Route>
          
        </Switch>


      </div>

    </Router>

  );
}

export default App;
