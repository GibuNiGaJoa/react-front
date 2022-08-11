import React from 'react';
import styled from "styled-components";
import HeartAnimation from "../icons/HeartAnimation.gif"

const Notification = ({ state, msg }) => {
    return (
        <div>
            {state ?
                <Container>
                    <img src={HeartAnimation} />
                    <p> {msg}!</p >
                </Container > 
                : null}
        </div>

    );
};

const Container = styled.div`
position: fixed;
font-family: "NavbarFont";
top:100px;
width:300px;
height: 50px;
font-size: 40px;
font-weight:bold;
text-align: center;
background-color: rgb(255, 255, 255);
border-radius: 10px;
`;


export default Notification;