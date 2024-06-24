import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !amount) {
      alert('Please fill in all fields');
      return;
    }
    addExpense({ title, category, amount: parseFloat(amount) });
    setTitle('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex-none">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
