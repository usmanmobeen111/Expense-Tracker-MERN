import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/expenses';

export const getExpenses = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const createExpense = async (expenseData) => {
  const response = await axios.post(API_BASE_URL, expenseData);
  return response.data;
};

export const updateExpense = async (id, expenseData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, expenseData);
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
