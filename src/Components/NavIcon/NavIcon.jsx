import React from 'react';
import './NavIcon.css'

const NavIcon = (props) => {
    return (
        <div className='container' onClick={props.onClick} style={props.instyle}>
            <div className='icon' style={props.iconStyle}>{props.icon}</div>
            <div className='title' style={props.titleStyle}>{props.title}</div>
        </div>
    )
}

export default NavIcon