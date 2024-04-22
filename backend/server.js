const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('Hello 21BCP110!');
});

app.listen(port, () => {
 console.log(`Node.js backend listening at http://localhost:${port}`);
});
