import { Route, useLocation } from 'react-router-dom';
import './App.css';
import { Home, Detail, Landing, Form } from './views'
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route path='/home' render={() => <Home />} />
      <Route path={'/detail'} render={() => <Detail />} />
      <Route path={'/form'} render={() => <Form />} />
    </div>
  );
}

export default App;
