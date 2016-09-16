// Generate random database of genealogy data
var generator = new Promise(function(resolve, reject) {
  var tempArray= [];
  var birth, death;

  function genNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function genName() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for ( var i = 0; i < 6; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  for ( var a = 0; a < 7e5; a++ ) {
    birth = genNumber(1200, 2000).toFixed(0);
    death = (parseFloat(birth) + genNumber(0, 100)).toFixed(0);
    tempArray.push({ 
      firstName: genName(), lastName: genName(),
      birth: birth, death: death
    });
  }
  resolve(tempArray);
});

// use promise to generate data async
generator.then(function(result) {
  var fs = require('fs');
  var jsonData = { data: result };

  var stringData = JSON.stringify(jsonData);

  fs.writeFile('data.json', stringData,
  function (err) {
    if (err) return console.log(err);
    console.log('File write')
  });
}, function(err) {
  console.log(err);
});

