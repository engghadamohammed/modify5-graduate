
// import "./Worddata.css";
// import axios from "axios";
// import { Component } from "react";

// class Worddata extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//       const wd = new FormData();
//       wd.append( "word", this.state.value )
//       // const image = handelImage ();
//       /*
//       const Word ={
//         unit:''
//         lesson:''
//         word:''
//         imageurl:''
//       }
//       */
//       axios.post("")
//     }
  
//     render() {
//       return (
//         <form className="word" onSubmit={this.handleSubmit}>
//           <label>
//              Word
//                   <input className="inpuword" type="text" value={this.state.value} onChange={this.handleChange}
//             placeholder={this.props.type}   />
                  
//           </label>
//           <label>
//              Unit
//                   <input className="inpuword" type="text" value={this.state.value} onChange={this.handleChange}
//             placeholder={this.props.type}   />
                  
//           </label>
//           <label>
//              Lesson
//                   <input className="inpuword" type="text" value={this.state.value} onChange={this.handleChange}
//             placeholder={this.props.type}   />
                  
//           </label>
          
//           <button className="btn"  onClick={this.handleSubmit}>Sand</button>
//         </form>
//       );
//     }
// }
// export default Worddata

import React, { Component } from "react";
import "./Worddata.css"

import axios from "axios";

class Worddata extends Component {
  handleFileChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  upload = (event) =>
  {
    event.preventDefault();
    if (this.state.file) {
      let data = new FormData();
      data.append("file", this.state.file);
      data.set("data", this.state.text);

      axios
        .post("localhost:3000/FSE/FSEinsertQuestion/id", data)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
       <div className="container">
      <form className="data">
        {/* <label>Photo <input name="thing" className="inpuword  photo" type="file" onChange={this.handleFileChange} /></label> */}
       <label>Image <input className="inpuword "  type="file" onChange={this.handleFileChange}
                  ref={fileInput => this.fileInput = fileInput}
          style={{ display: "none" }} />
       
                
                <button className="inpuword" onClick={()=>this.fileInput.click()}> Choose Image</button></label>
       <label>Word E<input className="inpuword"  type="text" onChange={this.handleChange} /></label>
       <label>Word A <input className="inpuword"  type="text" onChange={this.handleChange} /></label>
       <label>Unit <input className="inpuword"       type="text" onChange={this.handleChange} /></label>
       <label>Lesson <input className="inpuword"    type="text" onChange={this.handleChange} /></label>
       
       
        <input className="update" type="button" onClick={this.upload} value="Upload" />
        </form>
        </div>
    );
  }
}
export default Worddata;
