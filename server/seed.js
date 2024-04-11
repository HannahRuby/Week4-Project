import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE messages (
    name TEXT,
    message TEXT
  )
`);
db.exec(`
  INSERT INTO messages (name, message) VALUES ('spongebob','Hell');
`);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("Name", "Message");
insertStatement.run("Name", "Message");
insertStatement.run("Name", "Message");
