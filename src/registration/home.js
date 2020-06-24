import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

class Home extends Component {
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
        <div class="panel-body">
           {/* Welcome
           <button onClick={this.logout}>Logout</button> */}
        </div>
            
    );
  }
}

export default Home;