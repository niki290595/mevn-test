const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');

const app = express();

//middleware
app.use(volleyball);
app.use(express.json());
app.use(cors());

//todo: app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.json({
    message: 'API works!!!'
  });
});

app.use('/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/api/posts'));

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});