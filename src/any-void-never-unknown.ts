// void is a set of undefined and null

// this function is a void type and would not return any value
const doSomething = (): void => {
    console.log('doSomething');
}
doSomething()

// you may set a variable into any type
// with any type, the value of a variable could be any type
let foo: any = "foo"; 

// with any, you may call bar method from foo even though it's not exsist
// it would create a runtime error that't even typescript cound't prevent
// that's why we should avoid any in any chances 
// that doesn't mean that we should not use any at all
/*
foo.bar(); 
*/

// you can't have a function that actually ends when you specify the type ass never
const neverDoSomething = (): never => {
    throw "Never"; 
}

// set any type into vAny and unknown to vUnknown
// both value are 10
let vAny: any = 10; 
let vUnknown: unknown = 10; 

// you could print both variables and would not get any error's
console.log(vAny, vUnknown); 

// you may assign the value of "any" variable into other variables
let s1: string = vAny; 

// But you can't assign the value of unknown variable into other variable
/*
let s2: string vUnknown; 
*/

// TYPE ASSERTION

// you can't assign the value of unknown variable into other variable, 
// but when you do type assertion, you can assign the value of unknown variable into other variable
let s2: string = vUnknown as string; 

let pageNumber: string = "1"; 
// you can assign the value of pageNumber (string) as numeric data type when you do type assetion first
let numericPageNumber: number = (pageNumber as unknown) as number; 