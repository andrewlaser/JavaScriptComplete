//Object.create
var personProto = 
{
    calculateAge: function()
    {
        return (2019 - this.yearOfBirth)
    }
}
var john = Object.create(personProto);

john.name = 'john';
john.yearOfBirth;

jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        job: {value: 'designer'}
    }
);

/*
//Function constructor
var Person = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

Person.prototype.getAge = function()
{
    return (2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

console.log(john.getAge());

*/