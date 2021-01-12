// we need to call the application, declared in app.js and here is the place where ES6 comes
import app from "./app";

// declare the port number of server. If you run it only with your server, server is listen to it and show the error.
const PORT = 3001;

// main function of listening in server
const handleListening = () =>
  console.log(`✔ I'm listening on http://localhost:${PORT} !`);

// 2. how can I make a server ? server is now listening by the port number
app.listen(PORT, handleListening);