import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { AiOutlineSearch }  from "react-icons/ai";
import logoImg from "../img/logo.jpg"

const Navbar = () => {

    const navigate = useNavigate();

    const suggestBtn = () => {
        navigate('/suggest')
    }

    const loginBtn = () => {
        navigate('/login')
    }

    return (
        <nav>
            <div>
                <NavLink to="/" >
                    <img src={logoImg} />
                </NavLink>
            </div>
            <div></div>
            <div>
                <NavLink to="/togetherDonate" style={{ textDecoration: 'none' }}>
                    <p id="navbar-font">같이기부</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/togetherAct" style={{ textDecoration: 'none' }}>
                    <p id="navbar-font">모두의행동</p>
                </NavLink>
            </div>
            <div></div>
            <div>
                <button id="suggest-btn" onClick={suggestBtn}>제안하기</button>
                <button id="login-btn" onClick={loginBtn}>로그인</button>
                <NavLink id="search-icon" to="/search">
                    <AiOutlineSearch className="search-btn" size="30" />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;