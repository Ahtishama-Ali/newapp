import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AddTodo from './component/AddTodo';
import Navbar from './component/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './component/Register';
import EditTodo from './component/EditTodo';
import CreateTodo from './component/CreateTodo';
import Login from './component/Login';
import setAuthenticationToken from './setAuthenticationToken'

function App() {
  if(localStorage.jwt){
    setAuthenticationToken(localStorage.jwt);
  }
  

  return (
    <div className="container">
      <Navbar />
      <div id="container">
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={AddTodo} />
        <Route path="/create" exact component={CreateTodo} />
        {localStorage.jwt ? <Route path="/edittodo/:id" exact component={EditTodo} />: null}
        
        <Route path="/register" exact component={Register} />
      </div>
    </div>

  )
}

export default App;