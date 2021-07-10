import styled from '@emotion/styled';
import React from 'react';
import { AiOutlineClose, AiOutlineCrown, AiOutlineTeam } from 'react-icons/ai';

const StyledInfoBar = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
    font-size: 22px;
    color: #ffffff;
    background: linear-gradient(to right, #415ae9 0%, #8838f9 100%);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
`;

const StyledHeader = styled('div')`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const StyledLink = styled('a')`
    color: #ffffff;
    &:hover {
        color: #f1d1d1;
    }
`;

const StyledTeamView = styled('a')`
    color: #ffffff;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
        color: #f0f0f0;
    }
    @media only screen and (min-width: 728px) {
        display: none;
  }
`;

const InfoBar = ({ room, handleRoomInfo }) => {
    return (
        <>
            <StyledInfoBar>
                <StyledHeader>
                    <AiOutlineCrown />
                    <span>{room}</span>
                </StyledHeader>
                <div>
                    <StyledTeamView onClick={handleRoomInfo}>
                        <AiOutlineTeam />
                    </StyledTeamView>
                    <StyledLink href="/">
                        <AiOutlineClose />
                    </StyledLink>
                </div>
            </StyledInfoBar>
        </>
    );
};

export default InfoBar;
