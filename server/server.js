const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

// axios.defaults.baseURL = `http://localhost:5000`

app.get("/api", (req, res) => {
    res.json({ "users": ['John', 'Jane', 'Jim', 'Jill'] });
});

app.get("/api/signin", (req, res) => {
    res.json({ "users": [ 'Daniil', 'Dima', 'Dmitry', 'Dmitriy'] });
});

app.post('/api', (res, req) => {
    console.log(req.body);
});

app.listen(3033, () => console.log('Server running on port 3033'));