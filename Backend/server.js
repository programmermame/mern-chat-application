import express from 'express';
import { PORT } from './config/dotenv.js';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send({ message: "Welcome to Chat Application API" })
})




app.listen(PORT, (req, res) => {
    console.log(`server running on PORT ${PORT}`);
});