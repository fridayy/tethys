/**
 * Created by bnjm on 1/29/17.
 */
export class DataStore {

  private data:Array<any>;
  private count:number;

  constructor() {
    this.data = [];
    this.count = 0;
  }

  build(count) {
    let data = [];
    for(let i = 0; i < count; i++) {
      data.push({id : i, label : "New"});
    }
    return data;
  }

  update() {
    for(let i = 0; i < this.data.length; i++) {
      this.data[i] = {id : i, label: "Updated"}
    }
    return this.data;
  }

  remove() {
    this.data.splice(this.data.length - this.count);
  }

  clear() {
    this.data = [];
  }

  run(count = 1000) {
    this.count = count;
    this.data = this.build(count);
  }

  getData(): Array<any> {
    return this.data;
  }
}
