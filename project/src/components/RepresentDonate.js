import React from 'react';
import "./Represent.css"
import { NavLink, useNavigate} from "react-router-dom";
const RepresentDonate = () => {
  const navigate = useNavigate();

  const repreBtn = () => {
    navigate('/togetherDonate');
  }
  const infoBtn = () => {
    navigate('/togetherDonate');
  }
  
    return(
      <div className='repre'>
        <div className='left-items'>
          <img src='img/redotest.png' id='repreImg' alt='reDonateImg'></img>
          <button id="view-more" onClick={repreBtn}>자세히 보기</button>
        </div>  
        <div className='right-items'>
          <div className='info-box'>
              <div id='top-title'>
                <h5>더 나은 세상을 위한 행동에 참여해보세요.</h5>
              </div>
              
              <button id='box-img' onClick={infoBtn}>
                <img src='img/infoTest.jfif' className='infoFirst' alt='infoTestImg'></img>
                <div className='info-text'>
                  <h6><img src='https://t1.kakaocdn.net/together_image/svg/ico_checks.svg' alt='kakaoImg'></img>204명 행동중!</h6>
                  <h3>우리동네 작은가게 응원하고 오래오래 함께해요 !</h3><br />
                  <h5>나만 알기 아까운 작은 가게가 있다면, 지금 바로 행동하세요!</h5>                 
                  
                </div>
              </button>
          </div>
          
        </div>
      </div>
    )
}

export default RepresentDonate;