const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
//中间件 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//实现req加上cookies的属性，获取cookie数据
app.use(cookieParser());
app.get('/', (req,res) =>{
    res.send("主页");
    console.log(req.query);
});
app.get('/login', (req,res) =>{
    res.send("登录");
});
app.post('/handleLogin',(req,res) =>{
    console.log(req.body);
    res.send("hello req.body");
});
app.get("/setCookie",(req,res) => {
    console.log(req.cookies);
    res.cookie('username','zhangsan',{
        
        maxAge : 1000*60*480
    });
    res.send("设置成功")
});


//req.params 获取路由的动态参数
app.get('/hello/:id',(req,res) => {
    console.log(req.params);
    res.send("来啦");
});

app.get('/worid/:name/:age',(req,res) => {
    console.log(req.params);
    console.log(req.get("Accept"));
    res.send("dawda");
});



app.listen(3000);