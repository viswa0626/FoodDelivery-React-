import React, { useState } from 'react';
import NavIcon from '../NavIcon/NavIcon';
import "./SideNavBar.css";
import { Link, useNavigate } from 'react-router-dom';

import { FaHome, FaSignOutAlt, FaAddressCard, FaJediOrder } from 'react-icons/fa';


const UserSideNav = ({ sendIndex }) => {
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };



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
                    }} icon={<FaAddressCard />} title="Cart" instyle={index === 2 ? select : unSelect} iconStyle={index === 2 ? iconSelect : iconUnSelect} titleStyle={index === 2 ? titleSelect : titleUnSelect} />
                    <NavIcon onClick={() => {
                        setIndex(3)
                        sendIndex(3)
                    }} icon={<FaAddressCard />} title="Payment" instyle={index === 3 ? select : unSelect} iconStyle={index === 3 ? iconSelect : iconUnSelect} titleStyle={index === 3 ? titleSelect : titleUnSelect} />
                    <NavIcon onClick={() => {
                        setIndex(4)
                        sendIndex(4)
                    }} icon={<FaAddressCard />} title="FAQ" instyle={index === 4 ? select : unSelect} iconStyle={index === 4 ? iconSelect : iconUnSelect} titleStyle={index === 4 ? titleSelect : titleUnSelect} />
                    <NavIcon onClick={() => {
                        setIndex(5)
                        sendIndex(5)
                    }} icon={<FaAddressCard />} title="About" instyle={index === 5 ? select : unSelect} iconStyle={index === 5 ? iconSelect : iconUnSelect} titleStyle={index === 5 ? titleSelect : titleUnSelect} />
                </div>
            </div>
            <div className='bottom'>
                <NavIcon onClick={() => {
                    console.log("is this logout")
                    navigateToLogin()
                }
                }

                    icon={<FaSignOutAlt />} title="Logout" />



            </div>
        </div>
    )


}

export default UserSideNav