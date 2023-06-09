const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune, getCompliment, getSomeCompliments, addCompliment, deleteCompliment } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getSomeCompliments);
app.post("/api/compliment", addCompliment);
app.delete("/dinos/:id", deleteCompliment);


app.listen(4000, () => console.log("Server running on 4000"));
