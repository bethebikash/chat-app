import React from 'react';
import { AiOutlineClose, AiOutlineCrown } from 'react-icons/ai';

const InfoBar = ({ room }) => {
  return (
    <div>
      <div>
        <AiOutlineCrown />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <AiOutlineClose />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
