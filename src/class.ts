// This mean that the class that implement UserInterface interface should have a method called getFullName
interface UserInterface {
    getFullName(): string; 
}

// This class (User) implements the UserInterface interface
class User implements UserInterface {
    // the default setting for class variables would be public 
    protected firstName: string; // protected = could be accessed by the class and it's subclass
    private lastName: string; // private = only could be accessed by the class itself
    readonly unchangableName: string; // readonly = the value couldn't be changed (only readed)
    
    // create the object with the type value given
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName; 
        this.lastName = lastName;
    }
    
    // this methode should be implemented as the class implements the UserInterface interface
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    // you only could read the value of a readonly object
    chageUnchangableName(): void {
        console.log(this.unchangableName);
    }
}

// Admin class is an extension of User class
class Admin extends User {
    // private virable that only Admin class have
    private editor: string; 
    test(): void {
        console.log(this.firstName); // this could work becase firstName is Protected (not private)
        // console.log(this.lasName) [This wouldn't work because lastName is private]
    }
    setEditor(editor: string): void {
        this.editor = editor; // set the value of editor with the variable given
    }

    getEditor(): string {
        return this.editor; // return editor's value (which is private)
    }
}

const user = new User('Leone', 'Abbacchio');
/*
this would result in error because you cant access vairable that private outside the class
console.log(user.lastName)
*/
/*
this would result in error because you cant access vairable that protected outside the class or it's children(s)
console.log(user.firstName)
*/
console.log(user.getFullName());

const admin:Admin = new Admin('Giorno', 'Giovanna');
console.log(admin.getFullName());

admin.setEditor('Fugo');

/*
    console.log(admin.editor) [this line wouldn't work as the editor variable is private]
*/
console.log(admin.getEditor());

export {};