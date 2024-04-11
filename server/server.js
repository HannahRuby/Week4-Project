import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors()); // this allows our client to communicate with the serve without being blocked

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

app.post("/message", function (request, response) {
  const newMessage = request.body;

  console.log(newMessage);

  response.json(newMessage);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
