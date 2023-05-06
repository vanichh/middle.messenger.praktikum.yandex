const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/build/'));

app.get('/.*/', (req, res) => {
  return res.sendFile('./src/page/index.hbs');
});

app.listen(PORT, () => {
  console.log(`start success in port http://localhost:${PORT}`);
});
