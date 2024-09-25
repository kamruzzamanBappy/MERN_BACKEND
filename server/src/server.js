const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
// req body ta data niya kaj korbo
app.use(express.json());
app.use(  express.urlencoded({extended:true}));



const isLoggedIn = (req,res,next) => {
// how can cng req,res,login
    const login = true;
    if(login) {
        //1. how can cng req body
        req.body.id = 101;
        next(); }
   
   else {
        return res.status(401).json({message:'please login first'});   } };
// i want to use middleware(isLoggedIn) in every step : app.use(isLoggedIn)
//app.use(isLoggedIn);

app.get('/test',(req,res) => {
    res.status(200).send({message:'api is working fine'});
});

 app.get('/api/user',isLoggedIn, (req,res) => {
    //1. how can accept data from request body??
    console.log('req.body.id')
    res.status(200).send({
        message: 'user is returned'
    });
 });


app.listen(3001,() =>{
console.log(`server is running at http://localhost:3001`);
});