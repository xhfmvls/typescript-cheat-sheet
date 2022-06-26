// Set ID type to string
type ID = string; 

// Set PopularTag type to string
type PopularTag = string | number; 
// Union of type alias
type MaybePopularTag = PopularTag | null

// Create an interface with ID type
interface UserInterfaces {
    id: ID; 
    name: string; 
    surname: string;
}

// PopularTags are an array of popularTag 
// (that's mean the populartags array could have a number/integer value)
const popularTags: PopularTag[] = ["Dragon", "Coffee", 31]

// Maybe Popular Tag could be null
// But here, we assign the value "Dragon"
const dragonTags: MaybePopularTag = "Dragon"

// Specift the username value as "vincent"
let username: string = "vincent"; 

// Tha value type of pageName could be string or number
let pageName: string | number = "1"; 

// You may assign a number value into pageName
pageName = 30; 

// errorMessage variable could be assigned as string or null value
// the default value of errorMessage is null
let errorMessage: string | null = null; 

// user variable could be assigned as UserIntefaces or null value
// the default value of user is null
let user: UserInterfaces | null = null; 

// someProperty may have lot's of variable type
let someProperty: string | number | null | undefined | string[] | object; 
