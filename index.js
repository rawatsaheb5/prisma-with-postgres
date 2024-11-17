import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

import route from './route/index.js'
app.use(express.json())
app.get('/', (req, res) => {
    res.json('everything is fine')
})
app.use(route)

app.listen(PORT, () => {
    console.log(`server is listening at PORT ${PORT}`)
})