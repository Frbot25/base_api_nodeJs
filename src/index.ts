import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.PORT || 8100;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
