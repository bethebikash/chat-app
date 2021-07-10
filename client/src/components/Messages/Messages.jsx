import styled from '@emotion/styled';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import RoomInfo from '../RoomInfo/RoomInfo';

const MessageBoxWrapper = styled('div')`
    position: relative;
    height: 60vh;
    @media only screen and (max-width: 728px) {
        height: 100vh;
  }
`

const StyledMessages = styled(ScrollToBottom)`
    height: 100%;
    background: #dbe4e0;
`;

const StyledRoomInfo = styled('div')`
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
    height: 100%;
    padding-left: 10px;
    background-color: #fdfdfd;
`;

const Messages = ({ messages, name, users, showRoom }) => {
    return (
        <MessageBoxWrapper>
            <StyledMessages>
                {messages.map((message, i) => (
                    <div key={i}>
                        <Message message={message} name={name} />
                    </div>
                ))}
            </StyledMessages>
            {showRoom &&
                <StyledRoomInfo>
                    <div>
                        <RoomInfo users={users} />
                    </div>
                </StyledRoomInfo>
            }
        </MessageBoxWrapper>
    );
};

export default Messages;
