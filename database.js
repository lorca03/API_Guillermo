var sqlite3 = require('sqlite3').verbose()
var sha512 = require("js-sha512");

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",sha512("admin123456")])
                db.run(insert, ["user","user@example.com",sha512("user123456")])
            }
        }); 
        db.run(`CREATE TABLE "anotaciones" (
            "id" INTEGER,
            "anotacion"	TEXT NOT NULL,
            CONSTRAINT "fk_anotaciones_user" FOREIGN KEY("id") REFERENCES user,
            PRIMARY KEY("id"))`,
        (err) => {
            if (err) {
                console.log(err)
            }
        });
    }
});


module.exports = db