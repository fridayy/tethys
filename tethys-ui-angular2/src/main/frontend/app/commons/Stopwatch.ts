export class Stopwatch {

  private startTime: number;
  private endTime: number;
  private totalTime: number;
  public running: boolean;
  private name: string;

  constructor(name: string) {
    this.startTime = null;
    this.endTime = null;
    this.totalTime = null;
    this.running = false;
    this.name = name;

  }

  start():void {
    if (this.running) {
      throw String("Stopwatch already running!");
    }
    this.running = true;
    this.startTime = performance.now();
    console.log(this.name + " started");
  }

  stop():void {
    if (!this.running) {
      throw String("Stopwatch not running");
    }
    this.endTime = performance.now();
    this.totalTime = this.endTime - this.startTime;
    console.log(this.name + " took: " + this.totalTime + " milliseconds.");
  }
}
