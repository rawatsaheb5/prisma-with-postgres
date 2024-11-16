import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;



app.get('/', (req, res) => {
    res.json('everything is fine')
})


app.listen(PORT, () => {
    console.log(`server is listening at PORT ${PORT}`)
})