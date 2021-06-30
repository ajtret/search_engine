
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route exact path="/search">
    <SearchPage />
    </Route>
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
