const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.use(cors())

const budget = {
    "myBudget": [
        {
            "title": "Eat out",
            "budget": 30
        },
        {
            "title": "Rent",
            "budget": 350
        },
        {
            "title": "Groceries",
            "budget": 90
        },
        {
            "title": "utilities",
            "budget": 80
        },
        {
            "title": "wifi",
            "budget": 70
        },
        {
            "title": "beautycare",
            "budget": 150
        },
        {
            "title": "travel expenses",
            "budget": 120
        }
    ]
};

const data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.sendFile("C:\\Users\\sneha\\Documents\\NBAD\\personal-budget\\personal-budget.json");
});
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});