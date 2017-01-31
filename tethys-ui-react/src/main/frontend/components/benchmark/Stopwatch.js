/**
 * Created by bnjm on 1/31/17.
 */


export default class Stopwatch {
    constructor(name) {
        this.startTime = null;
        this.endTime = null;
        this.totalTime = null;
        this.running = false;
        this.name = name;

    }

    start() {
        if(this.running) {
            throw String("Stopwatch already running!");
        }
        this.running = true;
        this.startTime = performance.now();
        console.log(this.name + " started");
    }

    stop() {
        if(!this.running) {
            throw String("Stopwatch not running");
        }
        this.endTime = performance.now();
        this.totalTime = this.endTime - this.startTime;
        console.log(this.name + " took: " + this.totalTime + " milliseconds.");
    }
}