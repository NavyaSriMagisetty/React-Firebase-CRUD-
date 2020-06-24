// import React, { Component } from 'react';
// import firebase from '../Firebase';
// import { Link } from 'react-router-dom';
// import './signup.css'


// class Signup extends Component {

//   constructor(props) {
//     super(props);
//     this.signup = this.signup.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       email : "",
//       password : ""
//     }
//   }
//   signup(e){
//       e.preventDefault();
//       firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
//           console.log(u)
//       }).catch((err)=>{
//           console.log(err)
//       })
//   }
//   handleChange(e){
//       this.setState({
//           [e.target.name] : e.target.value
//       })
//   }
//   render(){
//       return(
//           <div className="formdec">
//             <div className="signup-box">
//               <h2>SIGNUP</h2>
//               <div class="user-box">
//               <form>
//                   <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   onChange={this.handleChange}
//                   value={this.state.email}
//                   />
//                   <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   onChange={this.handleChange}
//                   value={this.state.password}
//                   />
//                 <Link to={`/login`} className="btn btn-primary formButton">LOGIN</Link>
//                 <button className="btn btn-primary formButton" onClick={this.signup}>Signup</button>
                
               
//               </form>
//               </div>
//             </div>
//           </div>
//       )
//   }
// }
// export default Signup