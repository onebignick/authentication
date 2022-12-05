const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.listen(port, ()=>{
    console.log(`Express connected to http://localhost:${port}`)
})