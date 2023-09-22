const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.use(cors())

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.sendFile("C:\\Users\\sneha\\Documents\\NBAD\\personal-budget\\personal-budget.json");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});