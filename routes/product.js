var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/product',function(req,res){
  res.send('Hello World')
})
router.post('/product',function(req,res){
  res.send('got a POST request')
})
router.put('/product',function(req,res){
  res.send('got a PUT request at /user')
})
router.delete('/product',function(req,res){
  res.send('got a DELETE request at /user')
})
module.exports = router;
