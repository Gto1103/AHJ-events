export default class Goblin {
  constructor(name) {
    this.name = name;
  }

  createGoblin() {
    const image = document.createElement('img');
    image.className = this.name;
    image.id = 'goblin';
    return image;
  }
}
