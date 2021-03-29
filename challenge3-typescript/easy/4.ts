// // Implement the built-in Pick<T, K> generic without using it.
// // Constructs a type by picking the set of properties K from T
// // For example


// type MyPick<T, K extends keyof T> = {
//     [i in K]: T[i]
// };

// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// let todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }