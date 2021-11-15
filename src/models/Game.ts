export default class Game {
  name: string;
  id: string;
  tries: number;

  constructor(name: string, id: string, tries: number) {
    this.name = name;
    this.id = id;
    this.tries = tries;
  }
}
