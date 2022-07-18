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
