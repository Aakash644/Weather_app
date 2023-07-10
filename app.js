
const express = require("express");
const got = require("got");
const app = express();
const bodyParser=require("body-parser");
const date = require('date-and-time');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.render('index',{city__name:"City",img_src:"image",country:"Country",desc:"Weather",humid:"Null",prs:"Null",wind:"Null",temp1:"Temp",date_time:"Date"});

});
app.post('/', async function (req, res) {
    try {
       let city__name=req.body.city;
    const response = await got(`https://api.openweathermap.org/data/2.5/weather?q=${city__name}&appid=API_KEY&units=imperial`, { json: true });
    console.log(response.body);
    let now=new Date();
    let date_time=date.format(now, 'MMM DD YYYY');  
    console.log(date_time);

    
    let temp=Number(response.body.main.temp);
   
    let temp1=((temp-32)/(1.8)).toFixed(0);
    let wind=response.body.wind.speed;
    let prs=response.body.main.pressure;
    let humid=response.body.main.humidity;
    let desc=response.body.weather[0]["description"];
    let country=response.body.sys["country"];
    let img_src="https://openweathermap.org/img/wn/"+response.body.weather[0]["icon"]+"@2x.png"
    res.render('index',{city__name:city__name.toUpperCase(),img_src:img_src,country:country,desc:desc.toUpperCase(),humid:humid,prs:prs,wind:wind,temp1:temp1,date_time:date_time});
    
      } catch (err) { 
        res.send("<h2>No city of this name is available in our database.</h1>");
        console.log(err);
      }
       

});
app.listen(5000, function () {
    console.log("listening on port 5000.")
});