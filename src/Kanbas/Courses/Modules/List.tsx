
import "./index.css";
import { modules } from "../../Databases";
import { FaEllipsisV, FaCheckCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
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
          style={{ height: "fit-content", borderColor: "#d3d3d3" }}
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
            style={{ height: "fit-content", borderColor: "#d3d3d3" }}
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

        <button type="button" className="btn btn-danger m-1" style={{ height: "fit-content", borderColor: "#d3d3d3" }}>
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
      <hr />
      <div className="row">
        <div className = "col-8">
      <input
            value={module.name}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } /><br />
          <textarea
            value={module.description}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } /><br />
            </div>
            <div className = "col-4">
         
          <button
          type="button"
          className="btn btn-primary m-1"
          style={{ height: "fit-content", width: "75px", borderColor: "#d3d3d3" }}
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <button
          type="button"
          className="btn btn-success m-1"
          style={{ height: "fit-content", width: "75px", borderColor: "#d3d3d3" }}
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          </div>
          </div>
      <ul className="list-group wd-modules">
       
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div className="row">
                <div className="col-7">
              <FaEllipsisV className="me-2" />
              {module.name}           
              <p style={{paddingLeft:"25px",fontSize:"small"}}>{module.description}</p>
              </div>
              <div className="col-3 ">
              <span className="float-end ">
              <button
              type="button"
              className="btn btn-danger "
              style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button
              type="button"
              className="btn btn-success m-1"
              style={{ height: "fit-content", width: "60px", borderColor: "#d3d3d3" }}
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              </span>
              </div>
              <div className="col-2 ">
                <span className="float-end ">
                <FaCheckCircle className="text-success " />
                <FaPlus className="ms-2 " />
                <FaEllipsisV className="ms-2 " />
                </span>
                </div>
              
              </div>
              {module._id === module._id && (

                <ul className="list-group">

                  {module.lessons?.map((lesson: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
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
  );
}
export default ModuleList;