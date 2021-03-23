import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Form from "./container/Form.jsx";
import Dashboard from './container/Dashboard.jsx';
import Navbar from './container/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
ReactDOM.render(
  <React.StrictMode >
    <BrowserRouter>
     <Navbar/>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/addpeople" exact component={Form}/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();