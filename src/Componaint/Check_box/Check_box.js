import "./Check_box.css";
import axios from "axios";
import React, { Component } from 'react';



class Checkbox extends Component {

  state = {
    english: false,
    arabic: false,
    math: false
  };

  toggleChangeMJ = () => {
    this.setState(prevState => ({
      english: !prevState.isMJ,
    }));
  }

  toggleChangeJB = () => {
    this.setState(prevState => ({
      arabic: !prevState.isJB,
    }));
  }

  toggleChangeDrake = () => {
    this.setState(prevState => ({
      math: !prevState.isDrake,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (var key in this.state) {
      if(this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      check: arr.toString() 
    };
    axios.post('', data)
          .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="container">
       
        <hr />
        <form onSubmit = {this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.english}
                onChange={this.toggleChangeMJ}
                className="form-check-input"
              />
              English
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.arabic}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              Arabic
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.math}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Math
            </label>
          </div>
          <div className="form-group">
            <button className="btn ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkbox;


