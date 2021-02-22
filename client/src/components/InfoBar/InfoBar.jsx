import styled from '@emotion/styled';
import React from 'react';
import { AiOutlineClose, AiOutlineCrown } from 'react-icons/ai';

const StyledInfoBar = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
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
        color: #ffffff;
    }
`;

const InfoBar = ({ room }) => {
    return (
        <StyledInfoBar>
            <StyledHeader>
                <AiOutlineCrown />
                <span>{room}</span>
            </StyledHeader>
            <div>
                <StyledLink href="/">
                    <AiOutlineClose />
                </StyledLink>
            </div>
        </StyledInfoBar>
    );
};

export default InfoBar;
