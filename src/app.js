import express from 'express'
import dotenv from 'dotenv'
export const app = express();

dotenv.config()

let PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log('Server Up'));

app.get('/', (req, res) => {
    res.send({ mensaje: `Server Up` });
})

app.get('/api/users', (req, res) => {
    res.send({ mensaje: `Message from /api/users: ${process.env.MENSAJE}` });
})