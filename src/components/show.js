import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import './display.css'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('details').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          detail: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('details').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/profile")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="webcolor">
        <div class="panel panel-default">
          <div class="panel-heading heading">
            <h3 class="panel-title">
              {this.state.detail.rollno}
            </h3>
          </div>
          <div class="panel-body">
          <table align="center" cellpadding = "10">
            <dl>
                <dt>Name : {this.state.detail.name}</dt>
                <dd></dd>
              <dt>Year : {this.state.detail.year}</dt>
              <dd></dd>
              <dt>Branch : {this.state.detail.branch}</dt>
              <dd></dd>
              <dt>Section : {this.state.detail.section}</dt>
              <dd></dd>
              <dt>CGPA : {this.state.detail.cgpa}</dt>
              <dd></dd>
            </dl><button className="displayButton"><Link to={`/edit/${this.state.key}`} >Edit</Link></button>
            &nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="displayButton">Delete</button>
            <br/>
            <button className="displayButton"><Link to="/profile">STUDENT DETAILS</Link></button>
        </table>
        
          </div>
          
        </div>
      </div>
    );
  }
}

export default Show;