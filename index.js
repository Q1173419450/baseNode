var playerAction = process.argv[process.argv.length - 1];
console.log(playerAction);

var random = Math.random() * 3;

if (random < 1) {
  var computerAction = 'rock';
} else if (random > 2) {
  var computerAction = 'scissor'
} else {
  var computerAction = 'paper';
}
console.log(computerAction);

if (computerAction == playerAction) {
  console.log('平局');
} else if (
  computerAction === 'rock' && playerAction === 'paper' ||
  computerAction === 'scissor' && playerAction === 'rock' ||
  computerAction === 'paper' && playerAction === 'scissor'
) {
  console.log('you win');
} else {
  console.log('you lose');
} 