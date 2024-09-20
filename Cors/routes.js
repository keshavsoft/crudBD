import express from 'express';
import fs from "fs";

var router = express.Router();

router.get('/SampleJson', (req, res) => {
    const LocalJsonData = fs.readFileSync("./Cors/data.json", "utf8");
    res.end(LocalJsonData);
});

export { router };