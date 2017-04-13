const Person = function () {
    name = 'sss';
};

Person.prototype.get = function () {
    return name;
};

const q1 = new Person();
q1.get();

(function () {
    console.log(arguments);
}(() => 1));
