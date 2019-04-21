const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(volleyball);

//middleware
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require("./routes/api/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));