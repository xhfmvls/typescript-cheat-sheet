// T (or could be another character represent it) is an extension of an object
// the variable pass should have the same type as T (extends of object)
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

// T is like variable with any data type
interface UserInterface<T> {
    name: string,
    data: T
}

// you may also pass two generic variables
interface TempInterface<T, V> {
    temp: T, 
    meta: V 
}

// user is an user interface with {meta: string}
const user: UserInterface<{meta: string}> = {
    name: 'vincent', 
    data: {
        meta: 'foo'
    }
}; 

// anotherUser is an user interface with array of string
const anotherUser: UserInterface<string[]> = {
    name: 'abbacchio', 
    data: ['string', 'no string']
}

// you should specify the generics variable(s) used
const result = addId<UserInterface<{meta: string}>>(user)

// because temp interface have 2 generics variables, you also may pass two of it
const asd: TempInterface<number[], string> = {
    temp: [1, 2, 4], 
    meta: 'test'
}

console.log('result:', result); 

console.log(asd, typeof asd)

export {}; 