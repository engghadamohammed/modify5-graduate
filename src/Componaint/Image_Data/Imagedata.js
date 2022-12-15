// import { Component } from "react";
// import "./Imagedata.css";
// import axios from "axios";

// class Imagedata extends Component
// {
//   state = {
//     selectedFile :null
  
//   }
//   fileSelecteHandler = event =>
//   {
//     this.setState( {
//       selectedFile:event.target.files[0]
//     })
//   }
//   fileUploadHandler = () =>
//   {
//     const fd = new FormData();
//     fd.append("image" ,this.state.selectedFile, this.state.selectedFile.name )
//     const Image = axios.post( "", 
//       fd, {
//         onUploadProgress: ProgressEvent =>
//         {
//           console.log("Upload Progress:" + Math.round (ProgressEvent.loaded / ProgressEvent.total *100)+ "%")
//       }
//     }.then( res =>
//     {
//       console.log( res );
//       // return  res.ImageUrl
//     } ) ).catch( err => { } )
//     return Image;
//   }
//   render ()
//   {
//     return (
//       <>
       
//                 <input  type="file" onChange={this.fileSelecteHandler}
//                   ref={fileInput => this.fileInput = fileInput}
//           style={{ display: "none" }} />
       
                
//                 <button className="imageChoose" onClick={()=>this.fileInput.click()}> Image</button>
//                 <button className="btn"  onClick={this.fileUploadHandler}>Sand</button>
              
//       </>
//     )
//   }
 
// }

// export default Imagedata