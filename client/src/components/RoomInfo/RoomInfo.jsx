import styled from '@emotion/styled';
import React from 'react';

const StyledRoomInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px 0;
    height: 100%;
    color: #2c2c2c;
    justify-content: center;
`;

const StyledHeading = styled('div')`
    font-size: 22px;
`;

const RoomInfo = ({ users }) => {
    return (
        <StyledRoomInfo>
            <StyledHeading>People on the room.</StyledHeading>
            {users.map((user, i) => (
                <span key={i}>─ {user.name}</span>
            ))}
        </StyledRoomInfo>
    );
};

export default RoomInfo;
