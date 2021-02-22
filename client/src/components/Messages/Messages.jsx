import styled from '@emotion/styled';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

const StyledMessages = styled(ScrollToBottom)`
    height: 60vh;
    padding: 10px;
    background: #dbe4e0;
`;

const Messages = ({ messages, name }) => {
    return (
        <StyledMessages>
            {messages.map((message, i) => (
                <div key={i}>
                    <Message message={message} name={name} />
                </div>
            ))}
        </StyledMessages>
    );
};

export default Messages;
