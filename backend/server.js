const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expensesRouter = require('./routes/expenses');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/expenses', expensesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
