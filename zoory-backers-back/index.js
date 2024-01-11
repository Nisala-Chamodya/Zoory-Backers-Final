const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 6001
const mongoose = require('mongoose');
require('dotenv').config()

{/*start middleware*/}
    app.use(cors());
    app.use(express.json())
{/*end middleware*/}

{/*start mongodb config using mongoose*/}
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@zoory-backers-client.18dvqa2.mongodb.net/zoory-backers-database?retryWrites=true&w=majority`
).
    then(
        console.log("Mongodb connected successfully")
).catch((error) => console.log("Error Connecting to the Mongo DB",error));

{/*end mongodb config using mongoose*/}

{/*start import routes here*/}
const menuRoutes=require('./api/routes/menuRoutes');
    app.use('/menu',menuRoutes)
{/*end import routes here*/}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})