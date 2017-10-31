var arr = people['Chris',
  'Nicola',
  'Sonjeet',
  'Sarah',
  'Ash'];
var items = Array('Chris', 'Nicola', 'Sonjeet', 'Sarah', 'Ash');
var item = items[Math.floor(Math.random() * items.length)];
var newPerson = name;

function addPlayer() {

  var counter = 0;
  return function Person(name) {

    this.name = name;
    this.score = 0;
    this.imageURL = "http://cdn.makeuseof.com/wp-content/uploads/2012/04/batman_facebook.jpg?x85023";
    this.id = counter++;
  }

  function input() {
    var table = document.getElementById('game');
    var tbody = table.getElementsByTagName('tbody')[0];
    var y = document.getElementsByClassName('ap').value;
    var text = document.createTextNode(y);
    var col = document.createElement('td');
    var row = document.createElement('tr');
    col.appendChild(text);
    row.appendChild(col);
    tbody.appendChild(row);
  }
}
var people = addPlayer();
