const { events, chance, EVENT_NAMES } = require('../eventPool');

function sendPickup() {  // 1. vendor sends pickup for a store
  const event = {
    store: chance.city(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log("Vendor asking for pickup! OrderId: ", event.orderId);
  events.emit(EVENT_NAMES.pickup, event);
}

function acknowledgeDelivery(orderId) {
  console.log("Vendor thank you for the delivery!", orderId);
}

function startVendor() {
  events.on(EVENT_NAMES.delivered, acknowledgeDelivery); //does this line really belong here?
  console.log("Vendor ready!");

  // Copy this pattern
  function ready() {
    sendPickup();

    setTimeout(ready, chance.integer({ min: 750, max: 2000 })); //once vendor is ready, every half a second it will send a new pickup event
  }
  ready();
  // The pattern
}

module.exports = {
  startVendor, toTest: {
    acknowledgeDelivery,
    sendPickup,
}};