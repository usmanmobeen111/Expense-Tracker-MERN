import { motion } from 'framer-motion';
import { FaChartPie, FaChartBar } from 'react-icons/fa';

const ExpenseChart = ({ expenses }) => {
  // Calculate category totals
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const totalAmount = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);

  const categories = Object.keys(categoryTotals);
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

  const getCategoryColor = (category, index) => {
    const colorMap = {
      Food: '#FF6B6B',
      Transportation: '#4ECDC4',
      Entertainment: '#45B7D1',
      Bills: '#96CEB4',
      Other: '#FFEAA7'
    };
    return colorMap[category] || colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-xl p-6 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FaChartPie className="mr-2 text-blue-500" />
        Expense Breakdown
      </h2>

      {expenses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500"
        >
          <FaChartBar className="mx-auto text-4xl mb-4 opacity-50" />
          <p>No data to display.</p>
          <p className="text-sm">Add some expenses to see the breakdown!</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* Simple Bar Chart */}
          <div className="space-y-3">
            {categories.map((category, index) => {
              const percentage = (categoryTotals[category] / totalAmount) * 100;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-24 text-sm font-medium text-gray-700">
                    {category}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full rounded-full flex items-center justify-end pr-2"
                      style={{ backgroundColor: getCategoryColor(category, index) }}
                    >
                      <span className="text-xs font-bold text-white">
                        {percentage.toFixed(1)}%
                      </span>
                    </motion.div>
                  </div>
                  <div className="w-20 text-right text-sm font-semibold text-gray-800">
                    ${categoryTotals[category].toFixed(2)}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t pt-4"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total Expenses</span>
              <span className="text-2xl font-bold text-blue-600">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ExpenseChart;
