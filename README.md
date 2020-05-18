# The Complete Node.js Developer Course: Projects

## 1) Notes App

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

## 4) Chat App

[See Demo deployed on Heroku](https://node-chat-rooms-app.herokuapp.com/)

[See chat-app folder](https://github.com/solygambas/node-complete-developer-course/tree/master/chat-app)

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
