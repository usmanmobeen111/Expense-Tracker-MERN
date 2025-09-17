import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import expenseRoutes from './routes/expenses.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/expenses', expenseRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Expense Tracker API' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
