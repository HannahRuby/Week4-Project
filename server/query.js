import Database from "better-sqlite3";
const db = new Database("database.db");

const detail = db.prepare("SELECT * FROM detail").all();
console.log("detail", detail);
