// api-gateway/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const router = require('./routes/routes');
const PORT = process.env.PORT || 3001;

// Route to forward requests to the user service
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
});

// Route to forward requests to the product service
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3002/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error retrieving products');
  }
});

app.use('/api',router)

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
