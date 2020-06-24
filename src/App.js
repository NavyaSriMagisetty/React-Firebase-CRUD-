import React, { Component } from 'react';
import firebase from './Firebase';
import Home from './registration/home';
import Login from './registration/login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              this.setState({user})
          }
          else{
              this.setState({user : null})
          }
        })
  }
  render(){
      return(
          <div className="App">
            {this.state.user ? (<Home/>) : (<Login/>)}
          </div>
      );
  }

}
export default App;