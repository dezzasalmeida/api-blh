require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const sequelize = require('./config/database');
const BLH = require('./models/blh');

const app = express();

helmet
app.use(helmet());

// Enable CORS
app.use(cors({
  origin: 'https://leitehumano.com.br',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

const blhRoutes = require('./routes/blhRoutes');
app.use('/api', blhRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
});

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database & tables synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = app;
