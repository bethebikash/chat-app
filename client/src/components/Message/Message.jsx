import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }

  return isSendByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
      <p>{user}</p>
    </div>
  );
};

export default Message;
