const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, CI/CD World!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Only start the server if the file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;