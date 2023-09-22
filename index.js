import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var eventCalender = [];
var newEvent;
app.get("/", (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("index.ejs", {
        kindOfDay: day, newEventItem: eventCalender
    });

});
app.post("/", (req, res) => {
    newEvent = req.body.newEvent;
    eventCalender.push(newEvent);
    res.redirect("/");

});




app.listen(port, () => {
    console.log(`server up at ${port}`);
});