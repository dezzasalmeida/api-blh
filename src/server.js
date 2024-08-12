const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason.stack || reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.stack);
  process.exit(1);
});