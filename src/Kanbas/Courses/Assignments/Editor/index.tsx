import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaRegCalendarAlt } from "react-icons/fa";
import { assignments } from "../../../Databases";
import { FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className=" d-flex justify-content-end m-1">
        <FaCheckCircle className="text-success m-2" /><b className="text-success m-1">  Published&nbsp;</b>
        <button className="btn btn-light" style={{borderColor: "#d3d3d3"}} ><FaEllipsisV/></button></div>
        <hr/>
      <p style={{fontSize:'medium'}}>Assignment Name</p>
      
      <input value={assignment?.title}
             className="form-control mb-2" />
             <p></p>
             <div className="col-sm-12">
        <textarea  style={{height:'auto'}} className="form-control" id="inputEmail3" >This is the assignment describes how to install the development environment for creating and worknig with Web applications we will be developing this semester.We will add new content every week ,pushing the code to a Github source repository, and then deploying the content to a remote server hosted on Netlify.</textarea>
      </div>
      <p></p>
             <form style={{paddingLeft: '10px'}}>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label " style={{textAlign: 'right'}}>Points</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" value="100" />
          </div>
        </div>
        <p></p>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label" style={{textAlign: 'right'}}>Assignment Group</label>
          <div className="col-sm-10">
            <select className="form-select" aria-label="Default select example">
              <option selected>ASSIGNMENTS</option>
              <option>Assignment Group Weights</option>
              <option>Gradescope 1.3</option>
            </select>          </div>
        </div>
        <p></p>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label" style={{textAlign: 'right'}}>Display Grade as</label>
          <div className="col-sm-10">
            <select className="form-select" aria-label="Default select example">
              <option selected>Percentage</option>
              <option>Assignment Group Weights</option>
              <option>Gradescope 1.3</option>
            </select>          </div>
        </div>
        <p></p>
        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" >
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
        <p></p>
        <div className="form-group row"  >
          

          <label  style={{paddingLeft: '30px',textAlign: 'right'}} className="col-2 col-form-label" >Assign</label>
          <div className="col-sm-10 d-flex justify-content-center">
          <div style={{border: '1.5px solid #ccc',
          borderRadius: '3px',float: 'right'}}>
            <div className="p-3">
            <label className="col-2 col-form-label" style={{padding: "10px"}}>Assign&nbsp;to</label>
            <div className="col-sm-10" style={{width: '100%'}}>
              <input type="text" className="form-control" id="inputEmail3" value="Everyone"/>
            </div>
            <label  className="col-2 col-form-label" style={{padding: "10px"}}>Due</label>
            <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Sep 18,2024   11:59 PM" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt className="fs-4"/></span>
          </div>
        </div>
    
            <p></p>
            
            <div className="row" >
            <div className="col-6" >
            <label  className="col-sm-2 col-form-label">Available&nbsp;From</label>
              <div className="input-group mb-2">
                <input type="text" className="form-control" id="inlineFormInputGroup" value="Sep 24,2024   11:59 PM"/>
                <div className="input-group-postpend">
                  <div className="input-group-text"> 
                    <FaRegCalendarAlt className="fs-4"/></div>
                </div>
              </div>
            </div>
            <div className="col-6" >
            <label  className="col-sm-2 col-form-label">Until</label>
              <div className="input-group mb-2">
                <input type="text" className="form-control" id="inlineFormInputGroup" value="Oct 24,2024   11:59 PM"/>
                <div className="input-group-postpend">
                  <div className="input-group-text"> 
                    <FaRegCalendarAlt className="fs-4"/></div>
                </div>
              </div>
            </div>
            </div>
            </div>
            <button style={{textAlign: 'center',width:'100%',border: '1px'}}>+Add</button>
          </div>          
        </div>
       
        </div>
        <p></p><br/>
        <hr/>
        <div className="form-group row"> 
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input m-2" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label m-1" >
Notify users that this content has changed.              </label>
            </div>
          </div>
        
        <div className="col-sm-2 d-flex justify-content-end" >
        <button onClick={handleSave} className="btn btn-light ms-2 float-end m-1" style={{borderColor: "#d3d3d3"}}>
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger m-1 float-end">
        Cancel
      </Link>
    </div>
    </div>
    <hr/>
        </form>
      
    </div>
  );
}
export default AssignmentEditor;