var playerAction = process.argv[process.argv.length - 1];

var game = require('./lib');


var count = 0;
process.stdin.on('data', e => {
  console.log(e.toString());
  const playerAction = e.toString().trim();

  var result = game(playerAction);

  if (result <= -1) {
    count ++
  }

  if (count === 3) {
    console.log('不玩了');
    process.exit();
  }
})