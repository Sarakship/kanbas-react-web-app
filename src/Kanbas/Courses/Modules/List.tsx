import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Databases";
import { FaEllipsisV, FaCheckCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
   
    <>
    
      <div className="flex-fill">
      <div className="d-flex" style={{ justifyContent: "flex-end" }}>
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content", borderColor: "#d3d3d3" }}
        >
          Collapse&nbsp;all
        </button>
        <button
          type="button"
          className="btn btn-light m-1"
          style={{ height: "fit-content",borderColor: "#d3d3d3" }}
        >
          View&nbsp;Progress
        </button>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle m-1"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{height: "fit-content", borderColor: "#d3d3d3" }}
          >
           <FaCheckCircle className="text-success m-1" /> Publish All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Publish All Modules and Items
            </a>
            <a className="dropdown-item" href="#">
              Publish Modules Only
            </a>
            <a className="dropdown-item" href="#">
              Unpublish All
            </a>
          </div>
        </div>

        <button type="button" className="btn btn-danger m-1" style={{height: "fit-content", borderColor: "#d3d3d3" }}>
          +&nbsp;Module
        </button>
        <button
          type="button"
          className="btn btn-light p-2 m-1 d-flex align-items-center justify-content-center"
          style={{ height: "35px", borderColor: "#d3d3d3" }}
        >
          <FaEllipsisV />
        </button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
            
              <ul className="list-group">
            
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item" >               
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
     
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
     
      
    </>
  );
}
export default ModuleList;
