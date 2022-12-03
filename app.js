const express=require('express');
const mongoose=require('mongoose');
const PORT=7777;
const app=express();


const exphbs=require('express-handlebars');

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static('static'))
app.use("/static", express.static('public'))



// db connection
const connectionString="mongodb://127.0.0.1:27017/mongocrud_assignment";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))
//db end 
const mainRoutes=require('./index');
app.use("/",mainRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work On ${PORT}`)
})