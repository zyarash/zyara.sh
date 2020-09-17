/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * main.js
 */

const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || "3000";


app.use(express.static(path.join(__dirname, "build")));


app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(port, () => {
    console.log(`Zyara's World starting up now!`);
    console.log(`Listetning on port ${port}`);
});
