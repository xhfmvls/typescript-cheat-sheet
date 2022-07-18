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
  console.log(arg1, ' ', typeof(arg1)); 
  console.log(arg2, ' ', typeof(arg2)); 

  let inIdentities: Identities<T, U> = {
    id1: arg1, 
    id2: arg2
  }; 
  return inIdentities; 
}

console.log(returnedIdentities); 