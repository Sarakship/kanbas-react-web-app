import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";
function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button 
       type="button"
       className="btn btn-success m-1 "
       style={{ height: "fit-content", width: "100px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(increment())}> Increment </button>
      <button 
       type="button"
       className="btn btn-danger m-1 "
       style={{ height: "fit-content", width: "100px", borderColor: "#d3d3d3" }}
      onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;