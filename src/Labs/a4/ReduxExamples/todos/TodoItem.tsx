import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";
function TodoItem({ todo } : {todo :TodoType;} ) {
    
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item ">
      {todo.title}

      <button 
       type="button"
       className="btn btn-danger m-1 float-end form-control"
       style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button 
       type="button"
       className="btn btn-primary m-1 float-end"
       style={{ height: "fit-content", width: "65px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(setTodo(todo))}> Edit </button>
      
    </li>
  );
}
export default TodoItem;