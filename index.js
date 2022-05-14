const express = require('express');
const accountRoute=require('./routes/accountRoute');
const path=require('path');
require('dotenv').config();
const NodeCache = require( "node-cache" );

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));
app.use('/',accountRoute);
global.myCache = new NodeCache();
app.listen(process.env.PORT,()=>{
      console.log(`Server listening on PORT ${process.env.PORT}`)
})
