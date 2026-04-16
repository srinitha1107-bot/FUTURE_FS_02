const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let leads = [];

app.post("/add", (req, res) => {
    leads.push(req.body);
    res.send("Lead Added");
});

app.get("/leads", (req, res) => {
    res.json(leads);
});

app.put("/update/:id", (req, res) => {
    leads[req.params.id].status = req.body.status;
    res.send("Updated");
});

app.delete("/delete/:id", (req, res) => {
    leads.splice(req.params.id, 1);
    res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000")); 
