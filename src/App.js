import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {adminRoutes} from "./routes"
import Frame from "./components/Frame/index"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Frame>
      <Switch>{
        adminRoutes.map(route=>{
          return (
          <Route 
            key={route.path} 
            path={route.path}
            exact={route.exact}
            render={routeProps=>{
              return <route.component {...routeProps} />;
          }} />);
        })
      }
      <Redirect to ="/404" />
      </Switch>
      </Frame>
    </div>
  );
}

export default App;
