const express = require("express")
const formidable = require('express-formidable');
const fs = require("fs");
const app = express()
var path = require('path');

app.use(formidable());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'forms.html'))
})

app.post("/", function(req, res) {
  console.log('post to /')
  // console.log(req.fields);
  fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(req.fields), function(error) {
    if (error) {
      console.error(error);
    } else {

      return res.send('Thank you for submitting your pet and owner information!');

    }
  })
});

app.listen(3000, function() {
  console.log('Owner and Pet Information listening on port 3000!')
})
