import { assignments, enrollments, grades, users } from "../../Databases";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <Buttons/>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
            <th style={{textAlign: 'center'}}>Student Name </th>
            {as.map((assignment) => (<th style={{textAlign: 'center'}}>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{textAlign: 'center',color:'red'}}> {user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                    
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td style={{textAlign: 'center'}}><input value={grade?.grade} style={{textAlign: 'center'}} /></td>);
                       })}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;