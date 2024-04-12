import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE messages (
    name TEXT,
    message TEXT
  )
`);
// db.exec(`
//   INSERT INTO messages (name, message) VALUES ('Ruby','It isn't cheap but its worth it');
// `);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("Dan", "I had the best time here.");
insertStatement.run("Nikki", "I recommend");
insertStatement.run("Diane", "Lovely place and staff");
insertStatement.run("Ruby", "Always recommend");
insertStatement.run(
  "John",
  "Someone cancelled our booking and didn't tell us, got it sorted eventually."
);
insertStatement.run("Jon", "Not cheap but worth it");
