// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = getDefaultConfig(__dirname);

require("ts-node/register");
module.exports = require("./metro.config.ts");
