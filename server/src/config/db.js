const mongoose = require('mongoose');

let user = 'niki';
let pass = 'jkA-XK2-g9u-9nx';
let server = 'cluster0-kfimm.mongodb.net';
let db = 'test';

mongoose.connect(
  `mongodb+srv://${user}:${pass}@${server}/${db}`,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);

module.exports = mongoose;