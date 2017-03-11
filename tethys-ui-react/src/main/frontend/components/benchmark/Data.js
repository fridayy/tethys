/**
 * Created by bnjm on 1/29/17.
 */
export default class Data {
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
        let add = this.data.length + this.count;
        for(let i = this.data.length; i < add; i++) {
            this.data.push({id : i, label : "Updated"});
        }
    }

    remove() {
        this.data.splice(this.data.length - this.state.count);
    }

    clear() {
        this.data = [];
    }

    run(count = 1000) {
        this.count = count;
        this.data = this.build(count);
    }
}