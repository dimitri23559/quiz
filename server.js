const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz');
const jobsheetRoute = require('./router/jobsheet');
const materiRoute = require('./router/materi');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJs API by didik');
});

app.use('/api/quizzes',quizRoute)
app.use('/api/jobsheet',jobsheetRoute)
app.use('/api/materis',materiRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});