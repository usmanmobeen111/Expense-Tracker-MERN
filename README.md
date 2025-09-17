# 💰 Expense Tracker MERN App

A modern, beautiful expense tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js). Track your expenses effortlessly with smooth animations, intuitive UI, and powerful features!

![Expense Tracker](https://img.shields.io/badge/React-19.1.1-blue) ![Express](https://img.shields.io/badge/Express-5.1.0-green) ![MongoDB](https://img.shields.io/badge/MongoDB-8.18.1-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-blue) ![Framer Motion](https://img.shields.io/badge/Framer--Motion-12.23.13-purple)

## ✨ Features

- 🎨 **Modern UI**: Beautiful gradients, smooth animations, and glassmorphism effects
- 📊 **Expense Analytics**: Visual breakdown of expenses by category
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Real-time Updates**: Instant updates with smooth transitions
- 🏷️ **Category Management**: Organize expenses by predefined categories
- 📅 **Date Tracking**: Keep track of when expenses occurred
- ✏️ **Edit & Delete**: Full CRUD operations for expense management
- 🔄 **Smooth Animations**: Powered by Framer Motion for delightful UX

## 🚀 Tech Stack

### Frontend
- ⚛️ **React 19** - Modern React with hooks and concurrent features
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🎨 **TailwindCSS 4** - Utility-first CSS framework with custom gradients
- 🔗 **Axios** - HTTP client for API calls
- 🎯 **React Icons** - Beautiful icons from various icon packs
- ⚡ **Vite** - Fast build tool and development server

### Backend
- 🟢 **Node.js** - JavaScript runtime
- 🚀 **Express.js** - Web framework for Node.js
- 🍃 **MongoDB** - NoSQL database
- 🧱 **Mongoose** - MongoDB object modeling
- 🔒 **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
expense-tracker-mern/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseList.jsx
│   │   │   └── ExpenseChart.jsx
│   │   ├── pages/          # Page components
│   │   │   └── Dashboard.jsx
│   │   ├── api/            # API service functions
│   │   │   └── expenses.js
│   │   ├── index.css       # Global styles with Tailwind
│   │   └── main.jsx        # App entry point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   └── expensesController.js # CRUD operations
│   ├── models/
│   │   └── Expense.js      # Mongoose schema
│   ├── routes/
│   │   └── expenses.js     # API routes
│   ├── index.js            # Server entry point
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- 🟢 Node.js (v16 or higher)
- 🍃 MongoDB (local or cloud instance)
- 📦 pnpm (recommended) or npm

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the server directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/expense-tracker
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Usage

### Adding an Expense
1. 📝 Fill in the expense details (title, amount, category, date, description)
2. ➕ Click the "Add Expense" button
3. ✨ Watch the smooth animation as your expense appears in the list!

### Managing Expenses
- ✏️ **Edit**: Click the edit icon to modify expense details
- 🗑️ **Delete**: Click the trash icon to remove an expense
- 📊 **View Analytics**: Check the expense breakdown chart

### Categories
Available expense categories:
- 🍕 Food
- 🚗 Transportation
- 🎬 Entertainment
- 💡 Bills
- ❓ Other

## 🎨 Design Highlights

- 🌈 **Gradient Backgrounds**: Beautiful color transitions
- 🔮 **Glassmorphism**: Modern frosted glass effects
- 🎭 **Micro-interactions**: Hover effects and button animations
- 📱 **Mobile-first**: Responsive design that works everywhere
- 🎨 **Custom Animations**: Fade-ins, slide-ups, and bounce effects

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Create a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

## 🤝 Contributing

Contributions are welcome! 🎉

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit your changes: `git commit -m 'Add amazing feature'`
4. 🚀 Push to the branch: `git push origin feature/amazing-feature`
5. 📝 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 🎨 [TailwindCSS](https://tailwindcss.com/) for the amazing utility-first CSS framework
- 🎭 [Framer Motion](https://www.framer.com/motion/) for smooth animations
- 🔗 [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- ⚛️ [React](https://reactjs.org/) for the powerful frontend library

---

Made with ❤️ and lots of ☕ by [Your Name]

⭐ Star this repo if you found it helpful!
