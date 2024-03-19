import React from "react";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../../store";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
const ReduxExamples = () => {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return(
    <div>
      <h2>Redux Examples</h2>
      <AddRedux/>
      <TodoList/>
      <CounterRedux/>
      <HelloRedux/>

    </div>
  );
};

export default ReduxExamples;