// var xhttp = new XMLHttpRequest();
// xhttp.open ("GET", "https://opentdb.com/api.php?amount=10&category=27&type=multiple", true);
// xhttp.send();


//simple fetch request and promises 
const fetch = require ('node-fetch')
fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
.then(data => data.json())
.then(data => console.log (data));

