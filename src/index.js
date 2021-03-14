import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/modelHolder";
import http from 'http';

import ApiRouter from './routes/ApiRouter';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.options('*', cors());

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const APP_PORT = process.env.PORT || 9000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', ApiRouter.router());

server.listen(APP_PORT, () => {
    console.log(`serverApp started on port ${APP_PORT}`);
})