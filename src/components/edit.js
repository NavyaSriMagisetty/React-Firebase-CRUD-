import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import './display.css'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        key: '',
        rollno:'',
        name: '',
        year: '',
        branch: '',
        section:'',
        cgpa:'',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('details').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const detail = doc.data();
        this.setState({
          key: doc.id,
          rollno: detail.rollno,
          name: detail.name,
        year: detail.year,
        branch: detail.branch,
        section: detail.section,
        cgpa: detail.cgpa,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({detail:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {rollno,name,year,branch,section,cgpa } = this.state;

    const updateRef = firebase.firestore().collection('details').doc(this.state.key);
    updateRef.set({
      rollno,
      name,
      year,
      branch,
      section,
      cgpa
    }).then((docRef) => {
      this.setState({
        key: '',
        rollno:'',
        name: '',
        year: '',
        branch: '',
        section:'',
        cgpa:'',
      });
    //   this.props.history.push("/show/"+this.props.match.params.id)
    this.props.history.push("/profile")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="webcolor">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title heading">
              EDIT STUDENT DETAILS
            </h3>
          </div>
          <br/>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
            <table align="center" cellpadding = "10">
              <div class="form-group">
                <label for="rollno">Roll No:</label>
                <input type="text" class="form-control" name="rollno" value={this.state.rollno} onChange={this.onChange} placeholder="Roll No" />
              </div>
              
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
              </div>
              
              <div class="form-group">
                <label for="author">Year:</label>
                <input type="text" class="form-control" name="year" value={this.state.year} onChange={this.onChange} placeholder="Year" />
              </div>
              
              <div class="form-group">
                <label for="rollno">Branch:</label>
                <input type="text" class="form-control" name="branch" value={this.state.branch} onChange={this.onChange} placeholder="Branch" />
              </div>

              <div class="form-group">
                <label for="rollno">Section:</label>
                <input type="text" class="form-control" name="section" value={this.state.section} onChange={this.onChange} placeholder="section" />
              </div>

              <div class="form-group">
                <label for="rollno">CGPA:</label>
                <input type="text" class="form-control" name="cgpa" value={this.state.cgpa} onChange={this.onChange} placeholder="cgpa" />
              </div>

              <button className="displayButton"><Link to={`/show/${this.state.key}`} >Student List</Link></button>
              <button type="submit" class="displayButton">Submit</button>

              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;