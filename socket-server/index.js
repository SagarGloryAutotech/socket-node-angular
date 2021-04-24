const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Send Notification API
app.post('/send-notification', (req, res) => {
     const notify = {data: req.body};
    socket.emit('notification', notify); // Updates Live Notification
    res.send(notify);
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://127.0.0.1:${port}`);  // Server Connnected
});

// Socket Layer over Http Server
const socket = require('socket.io')(server);
// On every Client Connection
socket.on('connection', socket => {
    console.log('Socket: client connected');
});
