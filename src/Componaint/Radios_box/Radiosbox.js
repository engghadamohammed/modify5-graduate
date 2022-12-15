import "./Radiosbox.css"

import axios from "axios";
import React, { Component } from 'react';



class Radiosbox extends Component {

  state = {
    one: false,
    two: false,
    three: false
  };

  toggleChangeMJ = () => {
    this.setState(prevState => ({
      one: !prevState.isMJ,
    }));
  }

  toggleChangeJB = () => {
    this.setState(prevState => ({
      two: !prevState.isJB,
    }));
  }

  toggleChangeDrake = () => {
    this.setState(prevState => ({
      three: !prevState.isDrake,
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
              Level_1
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.arabic}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              Level_2
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.math}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Level_3
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

export default Radiosbox;
