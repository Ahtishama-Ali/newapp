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


function App() {
  return (
    <div className="container">
      <Navbar />
      <div id="container">
        <Route path="/" exact component={AddTodo} />
        <Route path="/create" exact component={CreateTodo} />
        <Route path="/edittodo/:id" exact component={EditTodo} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </div>
    </div>

  )
}

export default App;