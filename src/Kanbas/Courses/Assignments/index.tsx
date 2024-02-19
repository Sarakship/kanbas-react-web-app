import React from "react";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

import { GoTriangleDown } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import { assignments } from "../../Databases";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      
      <div className="row" >
         <div className="col-6 d-flex justify-content-start">
        
          <button
            className="btn btn-light  m-1"
            type="button"
            style={{ borderColor: "#d3d3d3", textAlign: 'left', backgroundColor: 'white',width:'400px' }}
          >
            Search for Assignments
          </button>
        
      </div>

    
      <div className="col-6 d-flex justify-content-end " >
     
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", width: "90px", borderColor: "#d3d3d3" }}
        >
         +Group
        </button>
       
        <button
          type="button"
          className="btn btn-danger m-1"
          style={{ height: "fit-content", width: "120px", borderColor: "#d3d3d3" }}
        >
          +Assignment
        </button>
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", width: "40px", borderColor: "#d3d3d3" }}
        >
          <FaEllipsisV />
        </button>
       
       
      </div>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> <b><GoTriangleDown/>Assignments</b>
            <span className="float-end">
            <span className="badge rounded-pill" style={{color:'black',borderRadius: '1px', border: 'solid 1px black', padding: '3px'}}>40% of Total</span>

              <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <MdEditDocument className="me-2 text-success" />
                <Link style={{textDecoration:'none',color:'black'}}
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}` }>{assignment.title}</Link><br/>
                    <a href="#" style={{textDecoration:'none',color:'red',fontSize:'smaller',paddingLeft:'48px '}}>Multiple modules</a> <p style={{display:'inline',fontSize:'smaller'}}>| Not available yet</p>
                <span className="float-end">
                  <FaCheckCircle className="text-success disabled" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;