import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div key={expense._id} className="border rounded p-4 shadow-md">
          <h3 className="text-lg font-bold text-blue-500">{expense.title}</h3>
          <p>Amount: <span className="font-semibold">${expense.amount}</span></p>
          <p>Category: <span className="font-semibold">{expense.category}</span></p>
          <p>Date: <span className="font-semibold">{new Date(expense.date).toLocaleDateString()}</span></p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
