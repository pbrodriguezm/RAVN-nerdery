function prop(obj, key) {
    return obj[key];
}
var todo = {
    id: 1,
    text: "Buy milk",
    due: new Date(2016, 11, 31)
};
var id = prop(todo, "id"); // number | string | date
var text = prop(todo, "text"); // string
var due = prop(todo, "due"); // Date
console.log('>>>>', id);
