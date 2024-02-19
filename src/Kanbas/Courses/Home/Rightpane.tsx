import "../Modules/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileImport,FaRegCheckCircle } from "react-icons/fa";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { PiCrosshairThin, PiChartBarFill } from "react-icons/pi";
import { CiBullhorn ,CiBellOn} from "react-icons/ci";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { TiCancel } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

function Rightpane(){
    return(
        <>
            

              <div className="col" style={{padding: '5px 0 0 30px'}}>
              <div className="row">
                <h5>Course Names</h5>
                <div className="col"><button className="btn btn-light btn-md p-2 m-1 " style={{borderColor: '#d3d3d3',height:'fit-content'}}><TiCancel className="fs-4"/>Unpublish</button>
                <button className="btn btn-success btn-md p-2 m-1 disabled" style={{width:'110px'}}><FaRegCheckCircle/> Publish</button></div>
            </div>
                        <a href="#">
                            <button type="button" className="btn-mod "
                               >
                                <FaFileImport/> Import Existing Content
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                                >
                                <IoArrowRedoCircleOutline/> Import From Commons
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                                >
                                <PiCrosshairThin/> Choose Home Page
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                               >
                                <PiChartBarFill/> View Course Stream
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                               >
                                <CiBullhorn/> New Annoucement
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                                >
                                <PiChartBarFill/> New Analytics
                            </button></a>
                        <a href="#">
                            <button type="button" className="btn-mod"
                               >
                                <CiBellOn/> View&nbsp;Course&nbsp;Notifications
                            </button></a>
                    </div>

                    
                    <br />
                    <div className="d-flex flex-column p-3 justify-content-end" >
                    <b>To do</b>
                    <hr/>
                        <div className="row">
                            <div className="col-2 p-0"><PiNumberCircleFiveFill  className="fs-4" style={{float:'right',color:'red'}}/> </div> 
                            <div className="col-9"><a href="#" style={{color:'red',paddingLeft:'5px',textDecoration:'none'}}> Grade A1 - ENV + HTML</a><br/>
                            <p style={{color:'grey',paddingLeft:'5px',fontSize:'smaller'}}>100 points <GoDotFill/> Sept 2 at 11:59pm</p>
                            </div>
                            <div className="col-1"><RxCross2  className="fs-7" /> </div> 

                            <br/>
                            <div className="col-2 p-0"><PiNumberCircleFiveFill  className="fs-4" style={{float:'right',color:'red'}}/> </div> 
                            <div className="col-9"><a href="#" style={{color:'red',paddingLeft:'5px',textDecoration:'none'}}> Grade&nbsp;A2&nbsp;-&nbsp;CSS&nbsp;+&nbsp;BOOTSTRAP</a><br/>
                            <p style={{color:'grey',paddingLeft:'5px',fontSize:'smaller'}}>100 points <GoDotFill/> Oct 2 at 11:59pm</p>
                            </div>
                            <div className="col-1"><RxCross2  className="fs-7" /> </div>
                        </div>
                    </div>
                    <p></p>
                    

                    <div className="row m-3" >
                    <h6>
                        <b>Coming Up</b>
                        <a href="#" style={{textDecoration: 'none', fontSize: 'smaller', float: 'right',color:'red'}}><SlCalender style={{color:'black'}}/> View Calender</a>
                    </h6>
                    <hr />
                        <div className="col-2">
                            <SlCalender/>
                        </div>
                        <div className="col-10">
                            <span className="event" >Lecture </span>
                            <a href="#" >
                                <p style={{color:'grey',fontSize:'smaller'}}>
                                    CS4550,12631,202410<br />Sep 7 at 11:45am 
                                </p>
                            </a>
                        </div>

                        <div className="col-2">
                            <SlCalender/>
                        </div>
                        <div className="col-10">
                            <span className="event" >Lecture </span>
                            <a href="#" >
                                <p style={{color:'grey',fontSize:'smaller'}}>
                                   CS4550,12631,202410<br />Sep 7 at 11:45am 
                                </p>
                            </a>
                        </div>

                        <div className="col-2">
                            <SlCalender/>
                        </div>
                        <div className="col-10">
                            <span className="event" >Lecture </span>
                            <a href="#" >
                                <p style={{color:'grey',fontSize:'smaller'}}>
                                    CS4550,12631,202410<br />Sep 7 at 11:45am 
                                </p>
                            </a>
                        </div>
                    </div>
        </>
    );
} export default Rightpane