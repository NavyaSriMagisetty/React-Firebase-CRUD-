import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import firebase from './Firebase';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    logout(){
              firebase.auth().signOut();
          }
  
    render() {
  return (
      
    <nav className="navbar navbar-inverse navbar-dark bg-dark">
      <NavLink exact activeClassName="active" to="/profile">        Student List
      </NavLink>
      <NavLink activeClassName="active" to="/create">        Add Student
      </NavLink>
      <NavLink activeClassName="active" to="/login" onClick={this.logout}>        Logout
      </NavLink>
        {/* <button  onClick={this.logout}>LOGOUT</button> */}
    </nav>
  );
    }
}
export default Header;