import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE messages (
    name TEXT,
    message TEXT
  )
`);
db.exec(`
  INSERT INTO messages (name, message) VALUES ('spongebob','Hello');
`);

const populateStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

populateStatement.run("Name", "Message");
populateStatement.run("Name", "Message");
populateStatement.run("Name", "Message");
