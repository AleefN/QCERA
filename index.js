const express = require("express");
const fs = require('fs');
const app = express();
const port = process.env.PORT | 3000;
app.get("/", (req, res) => {
    // fetch("data/reviews.json")
    // .then(res => res.json())
    // .then(results => {
    //     res.send(`${resut}`);
    //     console.log(results);
    // })
    // .catch((err) => {
    //     console.log(err + " error parsing 'reviews json' ");
    // });
    res.json({name: "QCERA page"});

    // fs.writeFile(`data/file.txt`, "Checking path", {encoding: 'utf8'}, (err) => "");
});



app.listen(port, () => {
    console.log(`App is listening on port ${port}...`);
});