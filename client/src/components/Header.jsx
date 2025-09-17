import { motion } from 'framer-motion';
import { FaWallet, FaChartLine } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="gradient-bg text-white py-8 px-6 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <FaWallet className="text-3xl" />
          <h1 className="text-3xl font-bold">Expense Tracker</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center space-x-2 text-lg"
        >
          <FaChartLine />
          <span>Track Your Finances</span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
