import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <input
      className="form-control-sm m-2 p-2"
        value={todo.title}
       
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button 
      type="button"
      className="btn btn-success m-1 float-end"
      style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button 
      type="button"
      className="btn btn-warning m-1 float-end"
      style={{ height: "fit-content", width: "75px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(updateTodo(todo))}> Update </button>
      
    </li>
  );
}
export default TodoForm;