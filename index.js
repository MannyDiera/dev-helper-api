const express = require('express');
const app = express();
const noteRoutes = require('./routes/notes');
const port = 8087;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
