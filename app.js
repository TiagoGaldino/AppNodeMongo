const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

require('./Controllers/authController')(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running in PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Olá mundo!")
})