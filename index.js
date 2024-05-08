const { PORT } = require("./config/index");

const SERVER_PORT = process.env.PORT || 3000;

const app = require("./app");
const http = require("http");
const server = http.createServer(app);

const { initializeDB } = require("./config/init");

initializeDB();

server.listen(PORT, () => {
  console.log("Server en vivo por el puerto: ", SERVER_PORT);
});