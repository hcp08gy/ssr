import express from 'express';

const app = express();
app.get('/say', function(req,res) {
  let { wd, callback } = req.query;
  console.log(wd) // Iloveyou
  console.log(callback) // show
  res.end(`${callback}('我是回复')`)
})
app.listen(3000);