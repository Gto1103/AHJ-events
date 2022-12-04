import Game from './game';

const game = new Game();

const newGameBut = document.getElementById('new-game');
if (newGameBut) {
  newGameBut.addEventListener('click', () => {
    if (game.timerId != null) {
      clearInterval(game.timerId);
    }
    game.missesCount = 0;
    game.displayCounter('miss-counter');
    game.hitsCount = 0;
    game.displayCounter('hit-counter');
    game.newGame();
  });
}

const clickOnGoblin = (event) => {
  event.preventDefault();
  const goblinTarget = event.target.closest('.cell');
  const goblinImg = goblinTarget.querySelector('.goblin');

  if (goblinImg === game.enemy) {
    game.removeEnemy();
    game.hitsCount += 1;
    game.displayCounter('hit-counter');
    game.missesCount -= 1;
  }
};

if (document.getElementById('field')) {
  document.getElementById('field').addEventListener('click', clickOnGoblin);
}
