/**
 * Created by bnjm on 1/29/17.
 */
export default class Data {
    constructor() {
        this.data = [];
    }

    build(count = 1000) {
        let data = [];
        for(let i = 0; i < count; i++) {
            data.push({id : i, label : "New"});
        }
        return data;
    }

    update() {
        let add = this.data.length + 1000;
        for(let i = this.data.length; i < add; i++) {
            this.data.push({id : i, label : "Updated"});
        }
    }

    remove() {
        this.data.splice(this.data.length - 1000);
    }

    run() {
        this.data = this.build();
    }
}