const express = require("express");
const fs = require('fs');
const app = express();
const port = process.env.PORT | 3000;
let reviews;
app.get("/", (req, res) => {
    fs.readFile("./reviews.json", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            reviews = JSON.parse(data);
            res.send(next_task());
        }
    });
});

function next_task() {
    let prof_rating_sum = 0;
    let workload_sum = 0;
    for(let i = 0; i < reviews.length; i++) {
        prof_rating_sum += reviews[i].professor_rating;
        workload_sum += reviews[i].workload_rating;
    }
    let prof_rating_avg = Math.round(prof_rating_sum / reviews.length);
    let workload_avg = Math.round(workload_sum / reviews.length);
    console.log(prof_rating_avg, workload_avg);
    return `${prof_rating_avg}\n${workload_avg}`;
}

app.listen(port, () => {
    console.log(`App is listening on port ${port}...`);
});