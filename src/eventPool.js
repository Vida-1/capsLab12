// this is what we're going to replace with socket.io in lab 12

const { EventEmitter } = require('events');
const chance = require("chance")();

const events = new EventEmitter();

const EVENT_NAMES = {
  pickup: "pickup",
  delivered: "delivered orderID:",
}

module.exports = { events, chance, EVENT_NAMES };