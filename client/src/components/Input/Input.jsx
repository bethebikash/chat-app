import styled from '@emotion/styled';
import React from 'react';

const StyledForm = styled('form')`
    display: flex;
    justify-content: space-between;
`;

const StyledInput = styled('input')`
    height: 30px;
    padding: 5px;
    width: 75%;
    border-radius: 0 0  0 5px ;
    align-self: stretch;
`;

const StyledButton = styled('button')`
    background: linear-gradient(to right, #415ae9 0%, #8838f9 100%);
    font-weight: 500;
    color: #ffffff;
    height: 40px;
    width: 25%;
    padding: 5px;
    border-radius: 0 0 5px 0;
    cursor: pointer;
`;

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <StyledForm>
            <StyledInput
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
                onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
            />
            <StyledButton onClick={(event) => sendMessage(event)}>Send</StyledButton>
        </StyledForm>
    );
};

export default Input;
