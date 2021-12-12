import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>EmyAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
