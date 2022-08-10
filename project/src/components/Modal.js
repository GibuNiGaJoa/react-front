import React from 'react';
import styled from 'styled-components';

const Modal = ({ modalClose }) => {

    return (
        <MoadlContainer>
            <ModalContent>
                <h2>모달창</h2>
                <h4>결제하기</h4>
                <ModalCloseBtn onClick={modalClose}>Modal close</ModalCloseBtn>
            </ModalContent>
        </MoadlContainer>
    );
};

const MoadlContainer = styled.div``;
const ModalContent = styled.div``;
const ModalCloseBtn = styled.button``;

export default Modal;