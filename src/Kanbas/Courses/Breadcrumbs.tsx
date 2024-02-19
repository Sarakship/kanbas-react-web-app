import { HiMiniBars3 } from "react-icons/hi2";
import { courses } from "../../Kanbas/Databases";
import { useParams, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { FaGlasses } from "react-icons/fa";

function Breadcrumbs() {

    const { pathname } = useLocation();
    const urlParts = pathname.split("/");
    const lastPart1 = urlParts[urlParts.length - 1];
    const lastPart2 = urlParts[urlParts.length - 2];
    const module = "Assignments";
    return (
        <div className="d-none d-md-block">
           <nav className="d-flex justify-content-between align-items-center" aria-label="breadcrumb">
    <ol className="breadcrumb m-3 d-flex align-items-center" style={{ flex: '1' }}>
        <li><HiMiniBars3 style={{ color: 'red', padding: '2px' }} className="fs-4" /></li>
        <li className="breadcrumb-item">
            <a href="#" style={{ color: 'red', textDecoration: 'none' }}>&nbsp;CS5610 01 SP24</a>
        </li>
        {module === lastPart2 ? (
            <>
                <li className="breadcrumb-item" style={{ color: 'red' }} aria-current="page">{lastPart2}</li>
                <li className="breadcrumb-item active" aria-current="page">{lastPart1}</li>
            </>
        ) : (
            <li className="breadcrumb-item active" aria-current="page">{lastPart1}</li>
        )}
    </ol>
    <button type="button"
        className="btn btn-light m-3"
        style={{ height: "fit-content", borderColor: "#d3d3d3", paddingTop: '5px' }}>
            <FaGlasses /> Student View
    </button>             
</nav>

</div>
    );
} export default Breadcrumbs