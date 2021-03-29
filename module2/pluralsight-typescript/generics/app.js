var Orange = /** @class */ (function () {
    function Orange(id, name) {
        this.id = id;
        this.name = name;
    }
    return Orange;
}());
var Pears = /** @class */ (function () {
    function Pears(id, city) {
        this.id = id;
        this.city = city;
    }
    return Pears;
}());
var Store = /** @class */ (function () {
    function Store() {
        this.items = [];
    }
    Store.prototype.addItem = function (item) {
        console.log(item);
        this.items.push(item);
    };
    Store.prototype.print = function () {
        console.log(this.items);
    };
    return Store;
}());
var test = new Store();
test.addItem(new Orange(1, 'Orange small'));
test.addItem(new Orange(2, 'Pears small'));
test.print();
