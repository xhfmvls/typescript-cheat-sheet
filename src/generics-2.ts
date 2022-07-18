const identities1 = <T>(arg1: T): T => {
  return arg1;
}

const identities2 = <T, U>(arg1: T, arg2: U): T => {
  return arg1;
}

const identities3 = <T, U>(arg1: T, arg2: U): [T, U] => {
  return [arg1, arg2]
}

console.log(identities1('test'));
console.log(identities2(10, 'test'));
console.log(identities3('test', 12));

interface Identities<V, W> {
  id1: V,
  id2: W
}

const returnedIdentities = <T, U>(arg1: T, arg2: U): Identities<T, U> => {
  console.log(arg1, ' ', typeof (arg1));
  console.log(arg2, ' ', typeof (arg2));

  let inIdentities: Identities<T, U> = {
    id1: arg1,
    id2: arg2
  };
  return inIdentities;
}

console.log(returnedIdentities);

class Programmer<T> {
  private languageName: string;
  private languageInfo: T;

  constructor(lang: string) {
    this.languageName = lang;
  }
}

let programmer = new Programmer('Typescript');

console.log(programmer);

// both below are valid
let result = identities2<string, number>('argument 1', 10);
let anotherResult = identities2('argument 1', 10);

interface Length {
  length: Number;
}

// <T extends Length, Type2, Type3>
const identity = <T extends Length>(arg1: T): T => {
  console.log(arg1.length);
  return arg1;
}

identity([1, 2, 3, 4]);
identity('test');
// identity(1);

// also suport T[]
const anotherIdentity = <T>(arg1: Array<T>): Array<T> => {
  console.log(arg1.length); 
  return arg1; 
}

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]; 
}

enum Difficulty {
  Easy,
  Intermediate, 
  Hard
}

let typescriptInfo = {
  name: 'Typescript', 
  supersetOf: 'Javascript', 
  difficulty: Difficulty.Intermediate
}

let supersetOf: Difficulty = getProperty(typescriptInfo, 'difficulty'); 