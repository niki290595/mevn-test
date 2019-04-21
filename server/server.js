const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');

const app = express();

//middleware
app.use(volleyball);
app.use(express.json());
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', require("./routes/auth/index"));
app.use('/api/posts', require("./routes/api/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));