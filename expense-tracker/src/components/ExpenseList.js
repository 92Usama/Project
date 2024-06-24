import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div key={expense._id} className="border rounded p-4">
          <h3 className="text-lg font-bold">{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
