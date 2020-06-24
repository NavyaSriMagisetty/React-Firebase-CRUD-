import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import './display.css'

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('details');
    this.state = {
        rollno: '',
        name:'',
        year:'',
        branch:'',
        section:'',
        cgpa:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { rollno,
        name,
        year,
        branch,
        section,
        cgpa, } = this.state;

    this.ref.add({
        rollno,
        name,
        year,
        branch,
        section,
        cgpa,
    }).then((docRef) => {
      this.setState({
        rollno:'',
        name: '',
        year: '',
        branch: '',
        section:'',
        cgpa:'',
      });
      this.props.history.push("/profile")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { rollno,name,year,branch,section,cgpa } = this.state;
    return (
      <div class="webcolor ">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title heading">
              ADD STUDENT
            </h3>
          </div>
          <div class="panel-body">
          
            <form onSubmit={this.onSubmit}>
            <table align="center" cellpadding = "10">
              <div class="form-group">
                <label for="rollno">Roll No:</label>
                <input type="text" class="form-control" name="rollno" value={rollno} onChange={this.onChange} placeholder="Roll No" maxlength="30"/>
              </div>
              
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" maxlength="30"/>
              </div>
              
              <div class="form-group">
                <label for="author">Year:</label>
                <input type="text" class="form-control" name="year" value={year} onChange={this.onChange} placeholder="Year" maxlength="30" />
              </div>
              
              <div class="form-group">
                <label for="rollno">Branch:</label>
                <input type="text" class="form-control" name="branch" value={branch} onChange={this.onChange} placeholder="Branch" maxlength="30"/>
              </div>

              <div class="form-group">
                <label for="rollno">Section:</label>
                <input type="text" class="form-control" name="section" value={section} onChange={this.onChange} placeholder="section" maxlength="30"/>
              </div>

              <div class="form-group">
                <label for="rollno">CGPA:</label>
                <input type="text" class="form-control" name="cgpa" value={cgpa} onChange={this.onChange} placeholder="cgpa" maxlength="30"/>
              </div>

              <button className="displayButton"><Link to="/profile">Student Details</Link></button>
              &nbsp;
              <button type="submit" class="displayButton">Submit</button>
              </table>
            </form>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Create;