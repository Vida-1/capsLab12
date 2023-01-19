const { startDriver } = require("./driver/handler");
const { startVendor } = require("./vendor/handler");

startDriver();
startVendor();

console.log("Vendor and Driver handlers have started!");