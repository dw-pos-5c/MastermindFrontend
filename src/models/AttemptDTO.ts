export default class AttemptDTO {
  colorPattern: string[];
  gameId: string;

  constructor(colorPattern: string[], gameId: string) {
    this.colorPattern = colorPattern;
    this.gameId = gameId;
  }
}
