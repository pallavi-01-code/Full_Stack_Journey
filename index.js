const express = require("express");
const app = express();
const port =3000;

app.get("/", (req, res) => { 
    res.send("Hey bakri")
})


app.listen(port, () => {
    console.log(`We are calling at http://localhost${port}`);
})