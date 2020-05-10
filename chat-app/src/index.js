const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// let count = 0;

io.on("connection", (socket) => {
  console.log("New websocket connection");
  //   socket.emit("countUpdated", count);
  //   socket.on("increment", () => {
  //     count++;
  //     io.emit("countUpdated", count);
  //   });
  socket.emit("message", "welcome");
  socket.broadcast.emit("message", "A new user has joined!");
  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
  socket.on("sendLocation", (coords) => {
    io.emit(
      "message",
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );
  });
  socket.on("disconnect", () => {
    io.emit("message", "A user has left!");
  });
});

server.listen(port, () =>
  console.log(`Chat app listening at http://localhost:${port}`)
);
