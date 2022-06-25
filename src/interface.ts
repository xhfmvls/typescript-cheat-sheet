// create a user interface with name, age, and getMassage components
// you have to specify each components data type
interface UserInterface {
    name: string, 
    age?: number, // Name is non-mandatory 
    getMessage(): string; 
}

// this is how you create an array of a specific interface
const userList: Array<UserInterface> = [];

// User One
const user1: UserInterface = {
    name: "vincent", 
    age: 19, 
    // the getMessage function should return a string value
    getMessage() {
        return 'hello ' + user1.name;
    }
};

// User Two
const user2: UserInterface = {
    name: "abbacchio", 
    age: 22, 
    getMessage() {
        return 'hello ' + user2.name;
    }
};

// User Three
// you don't have to specify user three's age because it's not mandatory
const user3: UserInterface = {
    name: "jolyne", 
    // getMassage method may be different compared to other methods
    getMessage() {
        return 'annyeong ' + user3.name; 
    }
};

// you only may push items with the same data type as the specification
userList.push(user1);
userList.push(user2);

// print user with index 1
console.log(userList[0]);

// print user 2's age
console.log(user2.age);

// print user 3's age
console.log(user3.age); // the output would be undefined as we never assign any value to the variables

// call getMessage on user 3
console.log(user3.getMessage()); 

// call getMessage on user 1
console.log(user1.getMessage()); 