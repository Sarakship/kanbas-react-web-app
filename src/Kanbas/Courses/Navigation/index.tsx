import { Link, useLocation } from "react-router-dom";
import "./index.css";  
import path from "path";
function CourseNavigation() {
  const links = ["Home","Modules","Piazza","Zoom Meetings","Assignments","Quizzes","Grades","People",
    "Panopto Video","Discussions","Annoucements","Pages","Files","Rubrics","Outcomes","Collaborations",
    "Syllabus","Settings"];
  const { pathname } = useLocation(); 
  return (
    <div className="d-none d-md-block">
    <ul className="wd-navigation">
      <li style={{color:'grey',fontSize:'x-small'}}><i>2024_10_Spring_24_Sem..</i></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""} >
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default CourseNavigation;
