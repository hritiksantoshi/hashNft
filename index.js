const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Routes);
const { PORT } = require('./config/config');

app.listen(PORT ,(err) => {
    if (err) throw err;
    else console.log(`Running on port ${PORT}`);
});