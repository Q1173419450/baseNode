module.exports = function (playerAction) {
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
    return 0;
  } else if (
    computerAction === 'rock' && playerAction === 'paper' ||
    computerAction === 'scissor' && playerAction === 'rock' ||
    computerAction === 'paper' && playerAction === 'scissor'
  ) {
    console.log('you win');
    return 1;
  } else {
    console.log('you lose');
    return -1;
  }
}