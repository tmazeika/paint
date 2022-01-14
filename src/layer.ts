export class Layer {
  points: [number, number][] = [];

  addPoint(x: number, y: number): void {
    this.points.push([x, y]);
  }
}
