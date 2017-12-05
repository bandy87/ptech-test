const io = require('socket.io-client');

const server = 'http://localhost:3000';
const socket = io(server);
export default {
    socket,
    send: function(eventName, data, callback){
        socket.emit(eventName, data, callback);
    }
}