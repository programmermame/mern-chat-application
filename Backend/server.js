import express from 'express';
import { PORT } from './config/dotenv.js';
import connectDatabase from './config/db.js';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send({ message: "Welcome to Chat Application API" })
})


connectDatabase();

app.listen(PORT, (req, res) => {
    console.log(`server running on PORT ${PORT}`);
});