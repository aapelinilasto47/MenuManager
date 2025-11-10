import menuRoutes from './routes/menuRoutes.js';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT1 = process.env.PORT;
const MONGODB_URI1 = process.env.MONGODB_URI;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Menu API');
});

app.use("/api/menu", menuRoutes);



mongoose.connect(MONGODB_URI1, {})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT1, () => {
    console.log(`Server is running on port ${PORT1}`);
});
