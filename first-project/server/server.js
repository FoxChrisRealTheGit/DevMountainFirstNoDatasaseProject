const express = require('express');
const App = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 9001;







app.listen(9001, ()=>{
    console.log(`This server is running OVER 9000 because it's on port ${port}`)
})