import { courses } from "../../Kanbas/Databases";
import { Navigate, Route, Routes,useParams } from "react-router-dom";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Breadcrumbs from "./Breadcrumbs";
function Courses() {
  return (
    <>
    <div>
      
      
      <div className="flex-fill">
      <Breadcrumbs/>
      <hr style={{marginTop:"0px"}}/>
        <div
          className="d-flex flex-fill"
          style={{ left: "320px", top: "80px" }} >
            <CourseNavigation />
            <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Courses" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />            
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
export default Courses;