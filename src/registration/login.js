import React, { Component } from 'react';
import firebase from '../Firebase';
import './login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email : "",
      password : ""
    }
  }
  login(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u)
    }).catch((err)=>{
        console.log(err)
    })
  }
  signup(e){
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          console.log(u)
      }).catch((err)=>{
          console.log(err)
      })
  }
  handleChange(e){
      this.setState({
          [e.target.name] : e.target.value
      })
  }
  render(){
      return(
          <div className="formdec">
            <div className="login-box">
              <h2>LOGIN</h2>
              <div class="user-box">
              <form>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  />
                  <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  />
                <button className="loginButton"  onClick={this.login}>Login</button>
                <button className="loginButton" onClick={this.signup}>Signup</button>
              </form>
              </div>
            </div>
          </div>
      )
  }
}
export default Login