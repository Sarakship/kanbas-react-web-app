import React , {useState} from "react";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

import { GoTriangleDown } from "react-icons/go";
import { Link, useParams,useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import { assignments } from "../../Databases";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment, selectAssignment,
  
} from "./assignmentsReducer";
import { KanbasState } from "../../store";
import Modal from "react-bootstrap/Modal";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments.filter((
      assignment) => assignment.course === courseId));
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const newAssignment = () => {
    const newID = 'A10' + (assignmentList.length + 1);
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${newID}`);
  }
  const deleteAssignmentID = () => {
    console.log(assignment)
    dispatch(deleteAssignment(assignment._id));
    setShow(false);
  }

  console.log("Assign List", assignmentList)
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
          onClick={newAssignment}
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
                <div className="row">
                  <div className="col-10">
                <FaEllipsisV className="me-2" />
                <MdEditDocument className="me-2 text-success" />
                <Link style={{textDecoration:'none',color:'black'}}
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}` }>{assignment.title}</Link><br/>
                    <a href="#" style={{textDecoration:'none',color:'red',fontSize:'smaller',paddingLeft:'48px '}}>Multiple modules</a> <p style={{display:'inline',fontSize:'smaller'}}>| Not available yet</p>
                    </div>
                <div className="col-2 " style={{float:"right",paddingLeft:"2.5rem"}}>
                

      <button 
      type="button"
      className="btn btn-light m-1"    
      style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
      onClick={() => {dispatch(selectAssignment(assignment)); handleShow();}}>
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure about deleting the assignment?</Modal.Body>
        <Modal.Footer>
          <button  
          type="button"
          className="btn btn-light m-1"
        
          style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
          onClick={handleClose}>
            Close
          </button>
          <button
                 type="button"
                 className="btn btn-light m-1"
               
                 style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
              onClick={() => {deleteAssignmentID();}}>
              Delete
            </button>
        </Modal.Footer>
      </Modal>
           
                <FaCheckCircle className="text-success disabled " /><FaEllipsisV className="ms-2 " /></div>
                </div>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;