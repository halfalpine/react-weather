import express from 'express';

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT);
