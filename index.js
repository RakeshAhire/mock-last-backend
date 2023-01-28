
const express = require('express');
const cors = require('cors');
const { connect } = require('./Config/db');
const { quizeModel } = require('./Models/quizes.model');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        res.send("ok")
    }
    catch (e) {
        console.log(e)
    }
})

app.post('/quizes', async (req, res) => {
    const { total, difficulty, category, page } = req.body;
    console.log('difficulty: ', difficulty);
    console.log('category: ', category);
    console.log('total: ', total);
    try {
        const ans = await quizeModel.find({$and: [{difficulty: difficulty},{category:category}]}).skip(page-1).limit(1)
        res.send(ans);
    }
    catch (e) {
        console.log(e)
    }
})

app.listen(8080, async () => {
    try {
        await connect;
        console.log("App listening 8080 port")
    }
    catch (e) {
        console.log(e)
    }
})