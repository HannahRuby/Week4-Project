import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("database.db");

console.log("Database initialized successfully.");

app.use(express.json());
app.use(cors()); // this allows our client to communicate with the serve without being blocked

const detail = [
  {
    name: "name",
    message: "message",
  },
];

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude!");
});

app.get("/detail", function (request, response) {
  const detail = db.prepare("SELECT * FROM detail").all();
  console.log("Query executed successfully.");
  response.json(detail);
});

app.post("/detail", function (request, response) {
  const newDetail = request.body;

  console.log(newDetail);
  const insertDetail = db.prepare("INSERT INTO detail (data) VALUES (?)");
  insertDetail.run(jsonData);
  const posts = db.prepare("SELECT * FROM detail").all();
  console.log("Posts retrieved from the database.");
  const parsedPosts = posts.map((post) => JSON.parse(post.data));

  response.json(parsedPosts);
});

app.listen("8080", function () {
  console.log("listening on port 8080");
});
