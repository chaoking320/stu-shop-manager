import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import './index.css';
import App from "./App"
import {mainRoutes} from "./routes"
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/Login';
import List from './pages/admin/products/List'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={routeProps=><App {...routeProps} />}></Route>
      {
        mainRoutes.map(route=>{
          return <Route key={route.path} {...route}></Route>
        })
      }
      <Redirect to ="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
