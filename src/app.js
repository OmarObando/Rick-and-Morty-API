const express = require('express');
const cors = require('cors');
const router = require('./routers/index');

require('dotenv').config();

const PORT = process.env.PORT || 3200;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
