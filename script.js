const express = require('express')
const app = express()
const PORT = 8080

// Обработчик главной страницы
app.get('/', (req, res) => {
	res.send('Сервер работает!')
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`)
})
