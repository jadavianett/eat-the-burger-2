const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
var PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js")
app.use(routes);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});