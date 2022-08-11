import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';

const Sidebar = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0} : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                    <NavLink to="/user" className={({isActive}) => {return isActive ? 'active_nav' : ''}}>
                        <li>کاربران</li>
                    </NavLink>
                    <NavLink to="/post" className={({isActive}) => {return isActive ? 'active_nav' : ''}}>
                        <li>پست ها</li>
                    </NavLink>
                    <NavLink to="/gallery" className={({isActive}) => {return isActive ? 'active_nav' : ''}}>
                        <li>گالری</li>
                    </NavLink>
                    <NavLink to="/todo" className={({isActive}) => {return isActive ? 'active_nav' : ''}}>
                        <li>کارها</li>
                    </NavLink>
            </ul>
        </div>
    )

}

export default Sidebar;