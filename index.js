const express = require('express');
const app = express();
const notesRoutes = require('./routes/notes');
const cors = require('cors');


app.use(cors);
app.use(express.json());

app.use('/notes', notesRoutes);



const port = 8087;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
