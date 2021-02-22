import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledWrapper = styled('div')`
    background-color: #f5faf9;
    padding: 30px;
    border-radius: 5px;
`;

const StyledHeader = styled('h2')`
    font-size: 24px;
    text-align: center;
    border-bottom: 3px solid #69e76f;
    margin-bottom: 20px;
`;

const StyledInput = styled('input')`
    border-bottom: 2px solid #70faff;
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
`;

const StyledButton = styled('button')`
    background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    font-weight: bold;
    color: #01110a;
    width: 100%;
    height: 30px;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
`;

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <StyledWrapper>
            <StyledHeader>Join</StyledHeader>
            <div>
                <StyledInput placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <StyledInput placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link
                onClick={(event) => (!name || !room ? event.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
            >
                <StyledButton className="button" type="submit">
                    Join
                </StyledButton>
            </Link>
        </StyledWrapper>
    );
};

export default Join;
