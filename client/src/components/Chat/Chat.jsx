import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import RoomInfo from '../RoomInfo/RoomInfo';
import styled from '@emotion/styled';

let socket;

const StyledWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const StyledMessanger = styled('div')`
    border-radius: 5px;
    display: flex;
    width: 40vw;
    flex-direction:column;
    justify-content: space-between;
    position: relative;

    @media only screen and (max-width: 728px) {
        width: 100vw;
        height: 100vh;
  }
`;

const StyledInfo = styled('div')`
    @media only screen and (max-width: 728px) {
        display: none;
  }
`

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://bikash-chat-app-server.herokuapp.com/';
    // const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => { });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const [showRoom, setshowRoom] = useState(false)
    const toggleRoom = () => setshowRoom(!showRoom);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <StyledWrapper>
            <StyledMessanger>
                <InfoBar room={room} handleRoomInfo={toggleRoom} />
                <Messages messages={messages} name={name} users={users} showRoom={showRoom} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </StyledMessanger>
            <StyledInfo>
                <RoomInfo users={users} />
            </StyledInfo>
        </StyledWrapper>
    );
};

export default Chat;
