/**
 * Created by bnjm on 3/19/17.
 */

export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Student extends Person {
  private identNr: number;

  constructor(name: string, age: number, identNr: number) {
    super(name, age);
    this.identNr = identNr;
  }
}
