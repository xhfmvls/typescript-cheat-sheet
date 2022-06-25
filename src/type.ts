// You have to parameter what is the type of value the function going to returns
// You also have to specify the type of the parameter variables
const getFullName = (name: string, surname: string): string => {
    // When you create a new variable, you would also specify the data type
    let fullname: string = `${name} ${surname}`
    return fullname; 
}

console.log(getFullName('hello', 'world'))