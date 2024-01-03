const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 6001;

{/*start middleware*/}
   app.use(cors());
    app.use(express.json())
{/*end middleware*/}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})