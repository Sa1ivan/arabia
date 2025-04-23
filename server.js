const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Проксируем Angular-фронтенд
app.use(express.static(path.join(__dirname, 'dist/arabia')));

// Проксируем API-запросы
app.get('/api/profile/', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://profi.ru/profile/`);
        res.send(response.data);
    } catch (err) {
        res.status(500).send('Ошибка при получении данных');
    }
});

// Обработка всех остальных маршрутов (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/arabia/index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
