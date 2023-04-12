import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Route, Switch, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Childmap from './components/Childmap';

function App() {
  const location = useLocation();
  let bgImage;

  // Set the background image based on the current route
  switch (location.pathname) {
    case '/':
      bgImage = require('./components/bg.jpg');
      break;
    case '/addchild':
      bgImage = require('./components/gg.jpg');
      break;
    case '/mapchild':
      bgImage = require('./components/bg.jpg');
      break;
    default:
      bgImage = require('./components/bg.jpg');
  }

  return (
    <div style={{ backgroundImage: `url(${bgImage})`,backgroundSize:'cover',backgroundRepeat: 'no-repeat', height: '100vh', margin: 0,
    padding: 0 }}>
      <Switch>
        <Route path='/' exact>
          <>
            <Navbar />
            <Login />
          </>
        </Route>

        <Route path='/addchild' exact>
          <>
            <Navbar />
            <ResponsiveAppBar />
          </>
        </Route>

        <Route path='/mapchild' exact>
          <>
            <Navbar />
            <Childmap />
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;