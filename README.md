# The Complete Node.js Developer Course: Projects

1. [**Notes App**](#notes-app): A simple CLI note-taking application to understand Node.js basics.
2. [**Weather App**](#weather-app): A weather app using Express, Handlebars templates, fetch API and callbacks.
3. [**Task App**](#task-app):
4. [**Chat App**](#chat-app): A simple chat room app to work with WebSocket protocol. 

## <a name="notes-app"></a>1) Notes App

A simple CLI note-taking application to understand Node.js basics.

[See notes-app folder](https://github.com/solygambas/node-complete-developer-course/tree/master/notes-app)

### Features
- handling Command Line Args (add, remove, list, read) and options (--title, --body) with Yargs.
- writing JSON files with JSON.stringify() and fs.writeFileSync().
- reading JSON files with fs.readFileSync(), toString() and JSON.parse().
- printing success/error messages in color with Chalk.
- sanitizing data with validator.
- watching for changes in development mode with nodemon.
- debugging Node.js with debugger, node inspect and Chrome inspector.

## <a name="weather-app"></a>2) Weather App

A weather app using Express, Handlebars templates, fetch API and callbacks.

[See weather-app folder for the first part](https://github.com/solygambas/node-complete-developer-course/tree/master/weather-app)

[See web-server folder for the final project](https://github.com/solygambas/node-complete-developer-course/tree/master/web-server)

[See Demo deployed on Heroku](https://node-weather-fetch.herokuapp.com/)

![](web-server/screenshot.png)

### Features
- making http requests in Node.js with request.
- protecting Weatherstack and Mapbox API keys with dotenv.
- using JSON Formatter in Chrome to work with JSON data.
- handling errors.
- using callbacks and callback chaining to make asynchronous requests.
- serving up HTML, JSON and static assets with Express.
- creating dynamic pages with Handlebars and hbs.
- styling the app with flexbox.
- accessing JSON HTTP endpoint from browser with fetch API.
- handling search by location for current weather.
- deploying on Heroku.

## <a name="chat-app"></a>4) Chat App

A simple chat room app to work with WebSocket protocol.

[See chat-app folder](https://github.com/solygambas/node-complete-developer-course/tree/master/chat-app)

[See Demo deployed on Heroku](https://node-chat-rooms-app.herokuapp.com/)

![](chat-app/screenshot.png)

### Features
- handling realtime communication between web clients and server with Socket.IO.
- sending messages with emit() and waiting for messages with on().
- managing chat rooms with socket.join and io.to.emit().
- sharing location with Geolocation API and Google Maps.
- avoiding inappropriate messages with bad-words.
- creating templates in Express server with Mustache.
- managing timestamps with Moment.js.

Based on [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) by Andrew Mead (3rd edition, 2019)
