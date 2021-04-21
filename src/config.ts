"use strict";
function Settings() {
  return {
    PORT: process.env.PORT || 8080,
    SECRET_KEY: process.env.SECRET_KEY,
  }
}
const config = Settings();
export default config;
