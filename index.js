import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <App />
    </Route>
    </Switch>
    </BrowserRouter>
    </StateProvider>


  
  </React.StrictMode>,
  document.getElementById('root')
);

