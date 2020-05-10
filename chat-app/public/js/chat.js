const socket = io();

// socket.on("countUpdated", (count) => {
//   console.log(`${count}`);
// });

// document.querySelector("#increment").addEventListener("click", () => {
//   console.log("clicked");
//   socket.emit("increment");
// });

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.querySelector("#chat-input").value;
  // const message = e.target.elements.message.value //// alternative targeting
  socket.emit("sendMessage", message);
});

document.querySelector("#chat-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    socket.emit("sendLocation", location);
  });
});
