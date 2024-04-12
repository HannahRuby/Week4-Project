import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("database.db");

app.use(express.json());
app.use(cors()); // this allows our client to communicate with the serve without being blocked

const detail = [
  {
    input: "Ajara",
    textarea: "I miss you",
  },
];

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude!");
});

app.get("/detail", function (request, response) {
  const messages = db.prepare("SELECT * FROM messages").all();

  response.json(messages);
});

app.post("/detail", function (request, response) {
  response.json(detail);

  const newDetail = request.body;
  // this console log will appear in the terminal beacuase that is where the server is running
  console.log(newDetail);

  // here is the response. At the moment we are just sendning back what the client sent with their own request
  // soon we will do stuff with that information, like adding it to a database
  response.json(newDetail);
});

app.listen("8080", function () {
  console.log("listening on port 8080");
});
