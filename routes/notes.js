const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  response.send('notes go here');
});

router.post('/', (req, res) => {
  const { noteData } = req.body;
  if (!noteData || !noteData.content) {
    res.status(400);
    res.send('Invalid Payload')
  }
  res.send('success');
});


module.exports = router;
