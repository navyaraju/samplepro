var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('runing at the root level');
});
app.get('/customer/:id',function(req,res){
    res.send('customer requested is '+ req.params['id']);
});
app.get('/employee/:name',function(req,res){
    res.send('employee requested is '+ req.params.name);
});
app.get('/manager',function(req,res){
    res.send('manager requested is '+ req.query.name);
});
app.listen(3000);