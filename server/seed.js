import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE detail (
        name TEXT,
        message TEXT
    )
`);

// db.exec(`
// INSERT INTO detail (name, message) VALUES ("Ruby","It isn't cheap but its worth it") `);

const insertStatement = db.prepare(
  `INSERT INTO detail (name, message) VALUES (?, ?)`
);

insertStatement.run("Dan said:", "I had the best time here.");
insertStatement.run("Nikki said:", "I recommend");
insertStatement.run("Diane said:", "Lovely place and staff");
insertStatement.run("Ruby said:", "Always recommend");
insertStatement.run(
  "John said:",
  "Someone cancelled our booking and didn't tell us, got it sorted eventually."
);
insertStatement.run("Jon said:", "Not cheap but worth it");
