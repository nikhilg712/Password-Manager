const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors')

const app = express();
const port = 3000;

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = "passop";


app.use(bodyParser.json());
app.use(cors())
// Route to get documents
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

app.post("/", async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.insertOne(password);
    res.send({success : true});
});
  
app.delete("/", async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection("passwords");
    const findResult = await collection.deleteOne(password);
    res.send({success : true});
  });


// Start the server
app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);// Establish database connection
});
