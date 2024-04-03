import express from 'express';

const port = 3016
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

import {writeResult} from "./database.js";

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/task1', async (req, res) => {
    let b = req.body.side_b;
    let a = req.body.side_a;
    let A = req.body.angle;
    let h = (b - a) * Math.tan(A);
    let s = ((a + b) * h) / 2
    if (A >= 180) {
        res.json({
            result: "Кут більше 180 градусів"
        })
    }
    let result = s.toFixed(2)
    await writeResult(result, 1)
    res.json({
        result: result
    })
})

app.post('/task2', async (req, res) => {
    let n = req.body.number;
    n = parseInt(n);
    if (n <= 0) {
        res.json({
            result: 'Дане число не є натуральним'
        })
    }
    n = n.toString()
    let split_n = n.split('');
    let arr = split_n.filter((num) => num == 1)
    let result = arr.length
    await writeResult(result, 2)
    res.json({
        result: result
    })
})

app.listen(port, () => {
    console.log(`Cлухаю порт : ${port}`)
})