require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const userRoutes = require('./routes/userRoutes');
const scenarioRoutes = require('./routes/scenarioRoutes');
const progressRoutes = require('./routes/progressRoutes');
const tipRoutes = require('./routes/tipRoutes');

// Import the arrays
const users = require('./controllers/userController').users;
const scenarios = require('./controllers/scenarioController').scenarios;
const progressData = require('./controllers/progressController').progressData;
const tips = require('./controllers/tipController').tips;

const app = express();
app.use(express.json());

// Asynchronous initialization function to populate initial data
async function initializeData() {
  users.push({
    id: '1',
    username: 'testuser1',
    password: await bcrypt.hash('password123', 10), // Pre-hashed password
  });

  scenarios.push({
    id: '1',
    title: 'Budget Planning',
    description: 'Help your family plan their monthly budget to achieve financial stability.',
    options: ['Save 20%', 'Invest 15%', 'Spend all', 'Pay off debts'],
  });

  progressData.push({
    userId: '1',
    data: { progressStage: 'Stage 1', score: 50 },
  });

  tips.push({
    scenarioId: '1',
    content: 'Saving at least 20% of your income is a healthy financial habit.',
    id: 'tip1',
  });
}

initializeData()
  .then(() => {
    console.log('Initial data loaded');
  })
  .catch((err) => {
    console.error('Error initializing data:', err);
  });

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/scenarios', scenarioRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/tips', tipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
