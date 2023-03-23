const express = require(`express`);

const app = express();

const PORT = 3000;

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get(`/greeting/:name`, (req, res) => {
    const name = req.params.name;
    res.send(`Hello there ` + name);
});

app.get(`/tip/:total/:tipPercentage`, (req, res) => {
    const totalTip = req.params.total * (req.params.tipPercentage / 100);
    res.json(totalTip);
});

app.get(`/magic/:phrase`, (req, res) => {
    let randomResponse = Math.floor(Math.random() * 20);
    res.send(`${req.params.phrase}? <h1>the answer is... ${response[randomResponse]}</h1>`);
});

app.get(`/`, (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href= "/98"> take one down, pass it around</a>`)
});

app.get(`/0`, (req, res) => {
    res.send(`0 Bottles of beer on the wall <a href= "/98"> take one down, pass it around</a>`)
})

app.get(`/:number_of_bottles`, (req, res) => {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <a href= "/${req.params.number_of_bottles - 1}"> take one down pass it around</a>`);
});

app.listen(PORT, () => {
    console.log(`listening on port 3000`)
});