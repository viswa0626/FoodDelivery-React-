import React, { useState } from 'react';
import NavIcon from '../NavIcon/NavIcon';
import "./SideNavBar.css";
import { FaHome, FaSignOutAlt, FaAddressCard, FaJediOrder } from 'react-icons/fa';


const SideNavBar = ({ sendIndex }) => {
    const [index, setIndex] = useState(0);

    const select = {
        background: "var(--primary)",
        color: "var(--white)"
    };
    const unSelect = {
        background: "var(--white)",
        color: "var(--primary)"
    };

    const iconSelect = {
        color: "var(--white)"
    };
    const iconUnSelect = {
        color: "var(--primary)"
    };

    const titleSelect = {
        color: "var(--white)"
    }
    const titleUnSelect = {
        color: "var(--primary)"
    }

    return (
        <div className='nav-bar'>
            <div className='top'>
                <div className='logo'>FOOD</div>
                <div className='nav-list'>
                    <NavIcon onClick={() => {
                        setIndex(0)
                        sendIndex(0)

                    }} icon={<FaHome />} title="Home" instyle={index === 0 ? select : unSelect} iconStyle={index === 0 ? iconSelect : iconUnSelect} titleStyle={index === 0 ? titleSelect : titleUnSelect} />
                    <NavIcon onClick={() => {
                        setIndex(1)
                        sendIndex(1)
                    }} icon={<FaJediOrder />} title="Orders" instyle={index === 1 ? select : unSelect} iconStyle={index === 1 ? iconSelect : iconUnSelect} titleStyle={index === 1 ? titleSelect : titleUnSelect} />
                    <NavIcon onClick={() => {
                        setIndex(2)
                        sendIndex(2)
                    }} icon={<FaAddressCard />} title="Add" instyle={index === 2 ? select : unSelect} iconStyle={index === 2 ? iconSelect : iconUnSelect} titleStyle={index === 2 ? titleSelect : titleUnSelect} />
                </div>
            </div>
            <div className='bottom'>
                <NavIcon icon={<FaSignOutAlt />} title="Logout" />
            </div>
        </div>
    )
}

export default SideNavBar