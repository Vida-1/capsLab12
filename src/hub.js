const { Server } = require('socket.io');
const { EVENT_NAMES } = require('./utils');

const io = new Server(3333);

function startEventServer() {
  io.on("connection", (socket) => {
    console.log("have new connection", socket.id);
    // socket.join("general"); removed b/c we decided not to use rooms

    socket.on(EVENT_NAMES.delivered, (delivered) => {  //these are listeners and they must happen on the socket
    console.log("HUB delivered", delivered.orderID);
    io.emit(EVENT_NAMES.delivered, delivered);
    });

    socket.on(EVENT_NAMES.pickup, (pickup) => {
    console.log("HUB pickup", pickup.orderID);
    io.emit(EVENT_NAMES.pickup, pickup); //if using rooms this would be: io.to("general").emit(EVENT_NAMES.pickup, pickup); 
    });
  });

console.log("Everything is started!");
}

startEventServer();