const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://profi.ru/profile/${id}/`);
        res.send(response.data);
    } catch (err) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
