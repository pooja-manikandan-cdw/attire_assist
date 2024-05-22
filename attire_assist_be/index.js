// let fs = require('fs');
let express = require("express");
const app = express();
const fitRoutes = require('./router/route');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/glam",fitRoutes);

app.listen(3000,()=>{
    console.log("app started");
});