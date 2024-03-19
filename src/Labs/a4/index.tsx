import React from "react";
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";


import ClickEvent from "./ClickEvent";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariables";
import { useSelector } from "react-redux";
import { LabState } from "../store";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
  return(
    <>
      <h1>Assignment 4</h1>
      
      <PassingFunctions theFunction={sayHello} />
      <ReduxExamples/>
      <Counter/>
      <ArrayStateVariable/>
      <BooleanStateVariables/>
      <ClickEvent/>
      <DateStateVariable/>
      <EventObject/>
      <ObjectStateVariable/>
      <ParentStateComponent/>
      <PassingDataOnEvent/>
      <StringStateVariables/>
      
    </>
  );
};
export default Assignment4;