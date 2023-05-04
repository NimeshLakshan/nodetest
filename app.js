const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
