let express = require('express');
let socket = require('socket.io');

/*--app setup--*/
let app = express();

/*--server setup--*/
let server = app.listen(4000, () => {
    console.log("Node server is running on port 4000")
})

/*--routes setup--*/
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

/*--web socket setup--*/
let io = socket(server);
io.on('connection', (socket) => {
    console.log("Someone connected with socket id:", socket.id)
})