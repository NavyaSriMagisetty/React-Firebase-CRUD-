import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import  './display.css'

class Display extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('details');
    this.unsubscribe = null;
    this.state = {
      details: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const details = [];
    querySnapshot.forEach((doc) => {
      const { rollno,name,year,branch,section,cgpa } = doc.data();
      details.push({
        key: doc.id,
        doc, // DocumentSnapshot
        rollno,
        name,
        year,
        branch,
        section,
        cgpa,
      });
    });
    this.setState({
      details
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="webcolor">
        <div class="panel panel-default ">
          <div class="panel-heading">
            <br/><br/>
            <h3 class="panel-title heading">
              STUDENT DETAILS
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe table-color">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Branch</th>
                  <th>section</th>
                  <th>CGPA</th>
                </tr>
              </thead>
              <tbody>
                {this.state.details.map(details =>
                  <tr>
                    <td><Link to={`/show/${details.key}`}>{details.rollno}</Link></td>
                    <td>{details.name}</td>
                    <td>{details.year}</td>
                    <td>{details.branch}</td>
                    <td>{details.section}</td>
                    <td>{details.cgpa}</td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;




