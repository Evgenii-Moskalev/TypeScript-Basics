// console.log('Hello world');
async function hello() {
    return 'world!';
}

// import * as _ from 'lodash';


// const url = new URL('...');

// let lucky = 23;
// let lucky: any = 23;
// lucky = "23";

// let lucky;
// lucky = 23;
// lucky = "23";

// let lucky: number;
// lucky = 23;
// lucky = "23";

// let lucky: number = 24;

// type Style = string;
// let font: Style;

// type Style = 'bold' | 'italic';
// let font: Style;
// font = 'something';

// type Style = 'bold' | 'italic' | 23;
// let font: Style;
// font = 'something';


interface Person{
    first: string;
    last: string;
}

// const person: Person = {
//     first: 'Jeff',
//     last: 'Delaney'
// }
// const person2: Person = {
//     first: 'Usain',
//     last: 'Bolt',
//     fast: true
// }

// interface Person {
//     first: string;
//     last: string;
//     [key: string]: any;
// }

// const person: Person = {
//     first: 'Jeff',
//     last: 'Delaney'
// }
// const person2: Person = {
//     first: 'Usain',
//     last: 'Bolt',
//     fast: true
// }

// function pow(x, y) {
//     return Math.pow(x, y);
// }
// pow('23', 'foo');

// function pow(x: number, y: number) {
//     return Math.pow(x, y);
// }
// // pow('23', 'foo')
// pow(2, 3);


// function pow(x: number, y: number): string {
//     return Math.pow(x, y).toString();
// }
// pow(2, 3);

// function pow(x: number, y: number): void {
//     Math.pow(x, y);
// }
// pow(2, 3);

//  ---------------------------------------Arrays
// const arr = [];
// arr.push(1);
// arr.push('23');
// arr.push(false);

// const arr: number[] = [];
// arr.push(1);
// arr.push('23');
// arr.push(false);


// type MyList = [number?, string?, boolean?]
// const arr: MyList = [];
// arr.push(1);
// arr.push('23');
// arr.push(false);

//  ---------------------------------------Generics

class Observable<T>{
    constructor(public value: T){}
}
let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);