/**

 * Jen's Super Cool Website!
 * Moshi moshi ٩(♡ε♡)۶

 **/


const express = require("express")
const path = require("path")
const sass = require("node-sass-middleware")
const themes = require("./public/themes.json");


const app = express()
const port = process.env.PORT || "8002";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(
    sass({
        src: path.join(__dirname, "sass"),
        dest: path.join(__dirname, "public"),
    })
);
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (request, response) => {
    response.render("index", { themes: themes });
});

app.get("/leejennings", (request, response) => {
    response.render("leejennings");
});

app.listen(port, () => {
    console.log(`Jen's Super Cool Website is running!`);
    console.log(`Listetning on port ${port}`);
});
