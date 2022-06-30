enum StatusEnum {
    NotStarted = "Not Started", 
    OnProgress = "On Progress", 
    Done = "Done"
}

// you can use enum as type of a variable
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

console.log(notStartedStatus)

notStartedStatus = StatusEnum.Done;
/*
notStartedStatus = 'foo' [This would not work as the 'foo' value is not a status]
*/

console.log(notStartedStatus);

interface Task {
    id: string;
    status: StatusEnum;
}

const task1: Task = {
    id: 'UUID10', 
    status: StatusEnum.Done
}

console.log(task1)

export {}; 