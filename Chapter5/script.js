// Closures
function integerSequence(startPoint) {

    return function() { return startPoint++; }

}

var seq = integerSequence(12);

var seq2 = integerSequence(2000);

console.log(seq());

console.log(seq2());

console.log(seq());

console.log(seq());

console.log(seq2());


function retirement(retirementAge)
{
    return function(yearOfBirth)
    {
        var a = 'years left until retirement';
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);



/*
//Immediately Invoked Functions Expressions (IIFE)
var score;
function game()
{
    var score = Math.random() * 10;
    console.log(score >= 5);
}
var getScore = game();
console.log(getScore);

(
    function ()
    {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();
*/
/*
// Functions returning functions
function interviewQuestion(job)
{
    switch (job) {
        case 'designer':
            return function(name)
            {
                console.log(name + ', explain UX');
            }
            break;
        case 'teacher':
        return function(name)
        {
            console.log(name + ', explain what subject do you teach');
        }
        break;
    default:
        console.log(name + ', hello what do you do?')
            break;
    }
}

var teacherQuestion = interviewQuestion('teacher');
//teacherQuestion('John');

interviewQuestion('teacher')('Mark');
*/

/*
//Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1978];
function arrayCalc(arr, fn)
{
    var arrRes = [];
    arr.forEach(element => {
        arrRes.push(fn(element));
    });
    return arrRes;
}

function calculateAge(el)
{
    return 2019 - el;
}

function isFullAge(age)
{
    return age >= 18;
}

function maxHeartRate(age)
{
    if(age >= 18)
    {
        return Math.round(206.9-(0.67*age));
    }
    else
    {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);
*/


/*

//Primitive vs objects

var obj1 = {
    name: 'John',
    age: 25
};


var obj2 = obj1;
obj1.age = 10;


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
*/
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