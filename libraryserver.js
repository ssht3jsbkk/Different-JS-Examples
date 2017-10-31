const express = require("express")
const formidable = require('express-formidable');
const fs = require("fs");
const app = express()
const path = require('path');

app.use(formidable());

//app.get('/book/:name', function(res,req)  {
//        const name=req.parans.name
//      fs.readFile ............
//});

app.get('/', function(req, res) {
  var name = req.fields.name;
  fs.readFile(path.join(__dirname, 'librarydatabase.html'))
  function (error, file)  {
    if (error) {
      console.error(error);
    } else {

      return res.send('Thank you for submitting your book information!');
  }
      var obj = JSON.parse(file);
      res.send(obj[name]);


});

//app.post("/", function(req, res) {
  //console.log('post to /')
  // console.log(req.fields);
//  fs.writeFile(path.join(__dirname, "librarydatabase.json"), JSON.stringify(req.fields), function(error) {
  //  if (error) {
    //  console.error(error);
  //  } else {

    //  return res.send('Thank you for submitting your book information!');

  //  }
//  })
//});

app.listen(3000, function() {
  console.log('Book Information listening on port 3000!')
})

/* express to work


[4:47]
//data in a file
//need out of file into data object
//need user info
//get the right response from data object
//need to break down as small as possible, be easier to write the codes.
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
//so if the port changes, don't need to rewite the code as defined as variable
app.get('/', function(req, res) {
  res.send('Home')
})

app.get('/book', function(req, res) {
  res.sendFile(path.join(__dirname, 'lib.json'))
})
//linking server to a file.
app.get('/book/:bookname', function(req, res) {
  const bookname = req.params.bookname;
  fs.readFile(path.join(__dirname, 'lib.json'), function(error, file) {
    if (error) {
      console.log(error);
      return res.send('Nope!')
    };
    let data = JSON.parse(file);
// Json file has to be string otherwise will send error.also object does not need defining
    console.log(data);
    const answer = data[bookname];
    if (!answer){
      return res.send('no book available of that name')
    }
    res.send(answer);
//after defining a constant need to send something back.
  })
});


app.listen(PORT, function() {
    console.log('listening on port' + PORT);
  }
);
//part of the server call. in cammand line node file name e.g node expressTest.js. */
