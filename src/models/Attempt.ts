export default class Attempt {
  colorPattern: string[];
  gameId: string;
  correctColors: number;
  correctColorsAndPositions: number;
  currentTry: number;

  constructor(colorPattern: string[], gameId: string, correctColors: number, correctColorsAndPositions: number, currentTry: number) {
    this.colorPattern = colorPattern;
    this.gameId = gameId;
    this.correctColors = correctColors;
    this.correctColorsAndPositions = correctColorsAndPositions;
    this.currentTry = currentTry;
  }
}
