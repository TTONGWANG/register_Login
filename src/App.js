import React from 'react';
import Register from './container/register/register'
import Login from './container/login/login'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path = '/'><Register/></Route>
      <Route path = '/register'><Register/></Route>
      <Route path = '/login'><Login/></Route>
    </Switch>
  );
}

export default App;
