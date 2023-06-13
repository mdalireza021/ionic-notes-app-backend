import express from 'express';
import db from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import routers from './routes/note.router.js';
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/note/', routers);

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
})