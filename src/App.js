import React from 'react';
import Navbar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Providers from './pages/Providers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Support from './pages/Support';
import About from './pages/About';
import './App.css';

function App() {
  return (
   <>
   <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/produtcs' component={Products} />
          <Route path='/providers' component={Providers} />
          <Route path='/reports' component={Reports} />
          <Route path='/settings' component={Settings} />
          <Route path='/support' component={Support} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
   </>
  );
}

export default App;
