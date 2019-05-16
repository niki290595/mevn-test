import '@babel/polyfill'
import express from 'express'
import routing from './routes/index'
import middlewares from './middlewares/index'

const app = express();

middlewares(app);
routing(app);

//todo: app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});