const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('We have a new connection.');

    socket.on('join', ({ name, room }) => {
        console.log(name, room);
    });

    socket.on('disconnect', () => {
        console.log('User have left');
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has been up and running on prot ${PORT}`));
