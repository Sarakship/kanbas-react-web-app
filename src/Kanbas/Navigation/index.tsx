import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,FaInbox,FaRegClock,FaDesktop,FaExternalLinkSquareAlt,FaQuestionCircle } from "react-icons/fa";

import "./index.css";
function KanbasNavigation() {
  const links = [    
    { label: "Account",   icon: <FaRegUserCircle className="fs-2"  />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaRegClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaExternalLinkSquareAlt className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle size={40} className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation">
      <li><img src="/images/neu.png"
                            style={{maxWidth: '60px'}} /></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;