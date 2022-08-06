import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { AiOutlineSearch } from "react-icons/ai";
import logoImg from "../img/logo.jpg"
import styled from "styled-components";

const NavbarV2 = () => {

    const navigate = useNavigate();

    const suggestBtn = () => {
        navigate('/suggest')
    }

    const loginBtn = () => {
        navigate('/login')
    }
    const logoutBtn = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (
        <nav>
            <Div>
                <NavLink exact to="/" >
                    <img className="logoImg" alt="logo" src={logoImg} />
                </NavLink>
            </Div>
            <div></div>
            <Div>
                <NavLink to="/togetherDonate" style={{textDecoration: 'none'}}>
                    <p id="navbar-font">같이기부</p>
                </NavLink>
            </Div>
            <Div>
                <NavLink to="/togetherAct" style={{ textDecoration: 'none' }}>
                    <p id="navbar-font">모두의행동</p>
                </NavLink>
            </Div>
            <div></div>
            <Div>
                <button id="suggest-btn" onClick={suggestBtn}>제안하기</button>
                <button id="mypage-btn" onClick={loginBtn}>마이페이지</button>
                <button id="logout-btn" onClick={logoutBtn}>로그아웃</button>
                <NavLink id="search-icon" to="/search">
                    <AiOutlineSearch className="search-btn" size="30" />
                </NavLink>
            </Div>
        </nav>
    )
}
const Div = styled.div`
`;

export default NavbarV2;