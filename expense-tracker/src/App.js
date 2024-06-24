import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post('/api/expenses', expense);
      if (response.data) {
        setExpenses(prevExpenses => [...prevExpenses, response.data]);
      }
    } catch (error) {
      console.error('Error adding new expense:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
