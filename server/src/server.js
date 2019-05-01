import '@babel/polyfill'
import express from 'express'
import volleyball from 'volleyball'
import cors from 'cors'
import routing from './routes/index'

const app = express();
//middleware
app.use(volleyball);
app.use(express.json());
app.use(cors());
routing(app);

//todo: app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});