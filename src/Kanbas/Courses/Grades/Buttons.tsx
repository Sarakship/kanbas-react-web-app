import { FaFileImport,FaFileExport  } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { MdOutlineRadio } from "react-icons/md";
function Buttons(){
  //input groups components
    return(
      <>
         <div className="d-flex  flex-column" >
         <div className="row" >
         <div className="col-6 d-flex justify-content-start ">
        
         {/* <div className="input-group mb-3">
  <input type="text" className="form-control "  style={{color:'red'}} placeholder="Gradebook" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2"><MdOutlineRadio/></span>
  </div>
</div> */}
<div className ="btn-group dropdown" >
          <button
            className="btn btn-light dropdown-toggle m-1 "
            type="button"
            style={{ borderColor: "#d3d3d3", textAlign: 'left', backgroundColor: 'white', width: '400px', color: 'red' }}
          >
            Gradebook
            <MdOutlineRadio className="float-end m-1"/>
          </button>
          <ul className="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
    </ul>
          </div>
      </div>

    
      <div className="col-6 d-flex justify-content-end " >
     
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", width: "90px", borderColor: "#d3d3d3" }}
        >
          <FaFileImport />Import
        </button>
       
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", width: "90px", borderColor: "#d3d3d3" }}
        >
          <FaFileExport />Export
        </button>
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", width: "40px", borderColor: "#d3d3d3" }}
        >
          <IoMdSettings />
        </button>
       
       
      </div>
      </div>
      <p></p>
      <div className="row " style={{paddingLeft:'5px'}}>
        <div className="col-6">
        <p ><b style={{fontSize:'large'}}>Student Names</b></p>
              <input className="form-select" aria-label="Default select example" placeholder="&#128269;Search students"/>
                
             
        </div>
        <div className="col-6">
        <p ><b style={{fontSize:'large'}}>Assignment Names</b></p>
        <input className="form-select" aria-label="Default select example" placeholder="&#128269;Search assignments"/>

        </div>
      </div>
      <p></p>
      <div className="m-1">
      <button type="button"
          className="btn btn-light p-2 m-1 d-flex align-items-center justify-content-center"
          style={{ height: "35px", borderColor: "#d3d3d3"}}><CiFilter/> Apply Filters</button>
      </div>
       </div>
       </>
    );
} export default Buttons