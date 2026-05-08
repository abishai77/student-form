const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
app.post("/save", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("studentdb");
        const collection = db.collection("students");
        const data = {
            name: req.body.NAME,
            age: req.body.AGE,
            course: req.body.COURSE,
            gender: req.body.GENDER,
            phone: req.body.PHONE_NO
        };
        await collection.insertOne(data);
        console.log(data);
        res.send("Student Data Saved Successfully");
    }
    catch (err) {
        console.log(err);
    }
});
app.listen(3000, () => {
    console.log("Server Started");
});