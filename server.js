const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('hello from product service');
});

app.get('/products', (req, res) => {
  res.send('product lists');
});

app.listen(4000, () => {
  console.log('Product server running on port', 4000);
})