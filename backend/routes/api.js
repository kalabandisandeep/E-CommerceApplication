const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  // Replace with real database query
  res.json([
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 }
  ]);
});

module.exports = router;

