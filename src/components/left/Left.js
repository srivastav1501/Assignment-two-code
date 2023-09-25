import './left.css'
import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutIcon from '@mui/icons-material/Logout';

const Left = () => {
    return (
        <div className='left'>
            <ul>
                <li> <GridViewIcon /> <span>Dashboard</span></li>
                <li> <BusinessCenterIcon /> <span>Manage Subscription</span></li>
                <li> <BusinessCenterIcon /> <span>Young Brain</span></li>
                <li> <BusinessCenterIcon /> <span>Mid Career</span></li>
                <li> <BusinessCenterIcon /> <span>Vendor</span></li>
                <li> <BusinessCenterIcon /> <span>Concertant</span></li>
                <li> <GridViewIcon /> <span>Reports</span></li>
                <li> <LogoutIcon /> <span>Sign Out</span></li>

            </ul>
        </div>
    )
}

export default Left;