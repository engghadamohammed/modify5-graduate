import "./Forminfo.css";
import { Checkbox, Radiosbox } from "../../Componaint/index";

const Forminfo = () => {
  return (
    <>
      <div className="main_text mb-3 mt-3">
        <h2 className="h2 mb-3 mt-3">Welcome to Fun Of Learning </h2>
      </div>
      <form>
        
     
        <div className=" m-5 row justify-content-md-center  ">
          <div className="Check_box col rounded-3  ">
            <h5>Choose Subject</h5>
            <Checkbox />
           
          </div>
          <div className="Radios col rounded-3  ">
            <h5>Choose Class</h5>
            <Radiosbox />
           
          </div>
        </div>
       
     
      </form>  

     
    </>
  );
};

export default Forminfo;
