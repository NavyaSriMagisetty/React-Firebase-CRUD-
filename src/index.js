import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/edit';
import Create from './components/create';
import Show from './components/show';
import Display from './components/display';
import Header from './header';
// import Login from './registration/login';

ReactDOM.render(
  <Router>
      <div>
      <Route path='/' component={App}/>
        <Header/>
        <Route path='/profile' component={Display}/>
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        {/* <Route path='/login' component={Login} /> */}
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();