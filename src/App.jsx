import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/qwdjaoeascaosdfaadfjaenfladnfkjandfkanfadjasdnjflankdanfkldasnfjdlasascaeqsk">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
