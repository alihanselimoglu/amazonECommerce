import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => { 
  console.log("Connected to MongoDB...");
}).catch((error) => {
  console.log(error);
});

const app = express();

app.use(express.json());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
