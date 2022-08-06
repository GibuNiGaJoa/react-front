import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { AiOutlineSearch } from "react-icons/ai";
import logoImg from "../img/logo.jpg"
import styled from "styled-components";

import Dropdown from "./Dropdown";

const Navbar = () => {

    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const navigate = useNavigate();
    //로컬스토리지에 로그인 여부를 확인한 후 , 로그인 되어있으면 login버튼 -> 마이페이지 버튼
    const [loginCheck, setLoginCheck] = useState();
    useEffect(()=> {
        if(localStorage.getItem('jwtToken')){
            setLoginCheck(true);
        }else{
            setLoginCheck(false);
        }
        
    },[loginCheck]);
    
    const suggestBtn = () => {
        navigate('/suggest')
    }
    
    const loginBtn = () => {
        navigate('/login')
    }

    const logoutBtn = () => {
        localStorage.removeItem('jwtToken');
        localStorage.setItem('isLogin', 'false');
        alert('정상적으로 로그아웃되었습니다.');
        navigate("/");
        window.location.reload();
    }
    const onMypageHandler = () => {
        if(localStorage.getItem('jwtToken') && localStorage.getItem('isLogin')){
            navigate('/mypage');
        } else{
            navigate('/login');
        }
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
                <div className="loginCheck">
                    
                    {!loginCheck ? <button id="login-btn" onClick={loginBtn}>로그인</button> :
                    <div>
                        <button id="menu-btn" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                        {   dropdownVisibility ? '': ''}
                        
                        </button>
                        <Dropdown visibility={dropdownVisibility}>
                                <ul>
                                    
                                    <button id="mypage-btn" onClick={onMypageHandler}>마이페이지</button>
                                    <button id="mypage-btn" onClick={logoutBtn}>로그아웃</button>
                                    
                                    
                                </ul>

                        </Dropdown>
                    </div>
                    }
                </div>
                <button id="suggest-btn" onClick={suggestBtn}>제안하기</button>
                <NavLink id="search-icon" to="/search">
                    <AiOutlineSearch className="search-btn" size="30" />
                </NavLink>
            </Div>
        </nav>
    )
}
const Div = styled.div`
`;

export default Navbar;