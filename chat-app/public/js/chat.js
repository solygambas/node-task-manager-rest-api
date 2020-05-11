const socket = io();

// socket.on("countUpdated", (count) => {
//   console.log(`${count}`);
// });

// document.querySelector("#increment").addEventListener("click", () => {
//   console.log("clicked");
//   socket.emit("increment");
// });

// Elements
const $messageForm = document.querySelector("#chat-form");
const $messageFormInput = document.querySelector("#chat-input");
const $messageFormButton = document.querySelector("#chat-button");
const $messageLocationButton = document.querySelector("#chat-location");
const $messages = document.querySelector("#messages");

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationTemplate = document.querySelector("#location-template").innerHTML;

socket.on("message", (message) => {
  // console.log(message);
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

socket.on("locationMessage", (message) => {
  // console.log(url);
  const html = Mustache.render(locationTemplate, {
    url: message.url,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
});

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  $messageFormButton.setAttribute("disabled", "disabled");
  const message = $messageFormInput.value;
  // const message = e.target.elements.message.value //// alternative targeting
  socket.emit("sendMessage", message, (error) => {
    $messageFormInput.value = "";
    $messageFormInput.focus();
    $messageFormButton.removeAttribute("disabled");
    if (error) {
      return console.log(error);
    }
    console.log("The message was delivered!");
  });
});

$messageLocationButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }
  $messageLocationButton.setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    socket.emit("sendLocation", location, () => {
      $messageLocationButton.removeAttribute("disabled");
      console.log("Location shared!");
    });
  });
});
