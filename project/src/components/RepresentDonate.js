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
          <img src='img/redotest.png' id='repreImg'></img>
          <button id="view-more" onClick={repreBtn}>자세히 보기</button>
        </div>  
        <div className='right-items'>
          <div className='info-box'>
              <button id='box-img' onClick={infoBtn}>
                <img src='img/infoTest.jfif' className='infoFirst'></img>
                <div className='info-text'>우리동네 !작은가게! 응원하고 오래오래 함께해요 !</div>
              </button>
          </div>
          
        </div>
      </div>
    )
}

export default RepresentDonate;