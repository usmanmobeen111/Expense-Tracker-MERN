import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash, FaTag, FaCalendar, FaDollarSign } from 'react-icons/fa';

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Food: 'bg-green-100 text-green-800',
      Transportation: 'bg-blue-100 text-blue-800',
      Entertainment: 'bg-purple-100 text-purple-800',
      Bills: 'bg-red-100 text-red-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.Other;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-xl p-6 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FaTag className="mr-2 text-blue-500" />
        Expense History
      </h2>

      {expenses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500"
        >
          <FaTag className="mx-auto text-4xl mb-4 opacity-50" />
          <p>No expenses recorded yet.</p>
          <p className="text-sm">Add your first expense above!</p>
        </motion.div>
      ) : (
        <AnimatePresence>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <motion.div
                key={expense._id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {expense.title}
                      </h3>
                      <div className="flex items-center text-green-600 font-bold">
                        <FaDollarSign className="mr-1" />
                        {expense.amount.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}>
                        {expense.category}
                      </span>
                      <div className="flex items-center">
                        <FaCalendar className="mr-1" />
                        {formatDate(expense.date)}
                      </div>
                    </div>

                    {expense.description && (
                      <p className="text-gray-600 text-sm">{expense.description}</p>
                    )}
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onEditExpense(expense)}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      title="Edit expense"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDeleteExpense(expense._id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      title="Delete expense"
                    >
                      <FaTrash />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default ExpenseList;
