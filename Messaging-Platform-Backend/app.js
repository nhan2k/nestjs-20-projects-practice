const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('./config')();

const io = require('socket.io')(app.listen(3000));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('sendMessage', (data) => {
    const messageService = new MessageService();

    messageService.sendMessage(data.content, data.sender, data.recipients).then((message) => {
      io.emit('newMessage', message);
    });
  });

  socket.on('getAllMessages', () => {
    const messageService = new MessageService();

    messageService.getAllMessages().then((messages) => {
      io.emit('allMessages', messages);
    });
  });
});