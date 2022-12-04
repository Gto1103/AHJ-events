import Goblin from './Goblin';

export default class Game {
  constructor() {
    this.field = document.getElementById('field');
    this.cells = document.querySelectorAll('.cell');
    this.missesCount = 0;
    this.hitsCount = 0;
    this.lastCell = null;
    this.TimerId = null;
  }

  createEnemy(name) {
    const goblin = new Goblin(name);
    this.enemy = goblin.createGoblin();
    return this.enemy;
  }

  removeEnemy() {
    if (this.lastCell === null || this.lastCell.firstElementChild === null) {
      return;
    }
    this.lastCell.firstChild.remove();
  }

  showEnemy(cell) {
    const goblin = new Goblin('goblin');
    this.enemy = goblin.createGoblin();
    cell.appendChild(this.enemy);
  }

  randomChangeEnemy() {
    const index = Math.floor(Math.random() * this.cells.length);
    const cell = this.cells[index];
    if (cell === this.lastCell) {
      return;
    }

    if (this.missesCount === 5) {
      this.statusGame = 'lose';
    }

    if (this.hitsCount === 9) {
      this.statusGame = 'win';
    }

    this.removeEnemy();
    this.lastCell = cell;
    this.showEnemy(this.lastCell);
  }

  newGame() {
    this.timerId = setInterval(() => {
      this.playing();
    }, 1000);
    this.statusGame = 'play';
    this.missesCount = 0;
    this.hitsCount = 0;
  }

  gameOver() {
    // eslint-disable-next-line no-alert
    alert('No, Game Over!!!');
    clearInterval(this.timerId);
    this.statusGame = 'end';
    this.timerId = null;
  }

  youWin() {
    // eslint-disable-next-line no-alert
    alert('You win!!!');
    clearInterval(this.timerId);
    this.statusGame = 'end';
    this.timerId = null;
  }

  playing() {
    if (this.statusGame === 'lose') {
      this.gameOver();
      return;
    }
    if (this.statusGame === 'win') {
      this.youWin();
      return;
    }

    if ((this.field.querySelectorAll('.enemy').length === 0)) {
      this.missesCount += 1;
      this.displayCounter('miss-counter');
    }
    this.randomChangeEnemy();
  }

  displayCounter(counter) {
    const count = document.getElementById(counter);
    if (counter === 'hit-counter') {
      count.textContent = this.hitsCount;
    } else if (counter === 'miss-counter') {
      count.textContent = this.missesCount;
    }
  }
}
