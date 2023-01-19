const { events, chance, EVENT_NAMES } = require("../eventPool");

const {
  toTest: { acknowledgeDelivery,
    sendPickup },
} = require("./handler");

jest.useFakeTimers();

test("Vendor acknowledgeDelivery", () => {
  // Arrange
  const emitMock = jest.spyOn(events, "emit");

  // Act  (call the method)
  acknowledgeDelivery("5678");

  // Assert (expect)
  expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.pickup, "5678");
});

test("Vender sendPickup", () => {
  // Arrange
  const emitMock = jest.spyOn(events, "emit");
  
  // Act
  sendPickup({
    store: "sendPickup test",
    orderId: "5678",
    customer: "William Riker",
    address: "123 Some Street",
  });

  // Timers -skip setTimeout
  jest.runAllTimers();

  // Assertion
  expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.pickup, "5678");

});