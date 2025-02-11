// product-service/index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 }
];

// Endpoint to get products
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});
