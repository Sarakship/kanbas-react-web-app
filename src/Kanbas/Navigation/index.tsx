import { Link, useLocation } from "react-router-dom";
import { TbMapNorth } from "react-icons/tb";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,FaInbox } from "react-icons/fa";
import { IoIosHelpCircleOutline,IoMdTime } from "react-icons/io";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import "./index.css";
function KanbasNavigation() {
  const links = [
    { label: "NEU",   icon: <TbMapNorth className="fs-2" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2"  />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <IoMdTime className="fs-2" /> },
    { label: "Commons",  icon: < IoArrowRedoCircleOutline className="fs-2" /> },
    { label: "Help",  icon: <IoIosHelpCircleOutline className="fs-2" /> },

  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation">
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