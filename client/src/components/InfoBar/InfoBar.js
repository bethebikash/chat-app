import React from 'react';
import { AiOutlineCloseCircle, AiOutlineMessage } from "react-icons/ai";


const InfoBar = ({room}) => {
  return (
    <div>
      <div>
        <img src={AiOutlineMessage} alt="omline-icon" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <img src={AiOutlineCloseCircle} alt="close-icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
