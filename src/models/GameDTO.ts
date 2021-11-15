export default class GameDTO {
  name: string;
  tries: number;

  constructor(name: string, tries: number) {
    this.name = name;
    this.tries = tries;
  }
}
