import styled from '@emotion/styled';
import React from 'react';
import ReactEmoji from 'react-emoji';

const StyledMessageIn = styled('div')`
    display: flex;
    gap: 5px;
    align-items: center;
    margin: 10px 0;
    justify-content: flex-start;
`;

const StyledMessageOut = styled('div')`
    display: flex;
    gap: 5px;
    align-items: center;
    margin: 10px 0;
    justify-content: flex-end;
`;

const StyledUser = styled('div')`
    font-weight: 100;
    font-size: 14px;
    color: #6e6e6e;
`;

const StyledMyText = styled('div')`
    background: blue;
    color: #ffffff;
    display: inline-block;
    padding: 3px 8px;
    border-radius: 12px;
    margin-right: 10px;
`;

const StyledOthersText = styled('div')`
    background: white;
    color: #000000;
    display: inline-block;
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: 10px;
`;

const Message = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return isSendByCurrentUser ? (
        <StyledMessageOut>
            <StyledUser>{trimmedName}</StyledUser>
            <StyledMyText>
                <p>{ReactEmoji.emojify(text)}</p>
            </StyledMyText>
        </StyledMessageOut>
    ) : (
        <StyledMessageIn>
            <StyledOthersText>
                <p>{ReactEmoji.emojify(text)}</p>
            </StyledOthersText>
            <StyledUser>{user}</StyledUser>
        </StyledMessageIn>
    );
};

export default Message;
