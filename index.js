const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.post('/messages', (req, res) => {
  const { text } = req.body;
  messages.push({ text, time: Date.now() });
  res.json({ status: "Message received" });
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(3000, () => console.log('Backend running'));
