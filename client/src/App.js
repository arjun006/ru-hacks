import React from 'react';
import './assets/style/app.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Form from './pages/Form'
import Info from './pages/Info'






function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/form' component = {Form}></Route>
        <Route path = '/info' component = {Info}></Route>
      </Switch>
    </Router>
  );
}

export default App;
