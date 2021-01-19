// we need to call the application, declared in app.js and here is the place where ES6 comes
import "./db";
import app from "./app";
// impoting dotenv and configuration
import dotenv from "dotenv";
dotenv.config();

// declare the port number of server. If you run it only with your server, server is listen to it and show the error.
const PORT = process.env.PORT || 4000;

// main function of listening in server
const handleListening = () =>
  console.log(`✔ I'm listening on http://localhost:${PORT} !`);

// 2. how can I make a server ? server is now listening by the port number
app.listen(PORT, handleListening);
