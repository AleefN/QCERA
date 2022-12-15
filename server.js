const express = require("express");
const fs = require('fs');
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT | 3000;
const db_uri = "mongodb+srv://qcera:afjkl40@cluster0.og1qefp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(db_uri);



app.get("/", (req, res) => {
    res.send("Welcome to QCERA reviews database");
})

let reviews;
app.get("/reviews", (req, res) => {
    async function run() {
        try {
          const database = client.db('Reviews');
          const reviews = database.collection('reviews');
      
        //   const query = {class_code: "CS212"};
        //   const review = await reviews.findOne(query);
        //   let response = `Class: ${review.class_code}, \nProfessor: ${review.professor},\n 
        //     Professor Rating: ${review.professor_rating},\n Review: ${review.professor_review}`
        } finally {
          await client.close();
        }
      }
      run().catch(console.dir);
});

app.get("/review", (req, res) => {
    const query = {class_code: "CS212"}
    async function run() {
        const database = client.db('Reviews');
        const reviews = database.collection('reviews');
        const review = await reviews.findOne(query);
        let response = `Class: ${review.class_code}, \nProfessor: ${review.professor},\n Review: ${review.professor_review}`
        res.send(response);
    }
      run().catch(console.dir);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
}); 