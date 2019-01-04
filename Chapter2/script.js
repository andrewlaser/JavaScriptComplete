
/*
var maryTeamScores = [101, 102, "str", 104];

for(var  i = 0; i <maryTeamScores.length; i++)
{
    if(typeof(maryTeamScores[i]) === 'string')
    {
        break;
    }
    console.log(maryTeamScores[i]);
}

*/

/*
var john = {
    name: 'John',
    mass: 100,
    height: 180,
    getBmi: function()
    {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
}

var mike =
{
    name: 'John',
    mass: 100,
    height: 180,
    getBmi: function()
    {
        this.bmi = this.mass / (this.height*this.height);
        return this.bmi;
    }
}


console.log(john);
*/
/*
var john = 
{
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark'],
    job: 'teacher',
    isMarried: true,
    calcAge: function()
    {
        this.age = 2019 - this.birthYear;
        return this.age;
    }
}
console.log(john.calcAge());

*/
/*
// Object literal
var john = 
{
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark'],
    job: 'teacher',
    isMarried: true
}
john.firstName = 'renamed';
console.log(john.firstName);
console.log(john['isMarried']);
console.log(john);

//New object syntax
var jane = new Object();
jane.middleName = 'MName';
jane.firstName = 'Jane';
console.log(jane);
*/

/*
var getTips = function(amount)
{
    if(amount < 50)
    {
        return amount * .2;
    }
    else if(amount < 200)
    {
        return amount * .15;
    }
    else
    {
        return amount * .1
    }
}



var bills = [124, 48, 268];
var tips = [];
var totals = [];
bills.forEach(element => {
    var tip = getTips(element)
    tips.push(tip);
    totals.push(element + tip);
});

console.log(tips);
console.log(totals);
*/
/*
var names = ['John', 'Mark', 'Jane'];
console.log(names.length);
names[names.length] = 'newName';
console.log(names.length);
console.log(names);

console.log(names.indexOf('John'));
console.log(names.indexOf('XXX'));

*/

/*
var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches';
        case 'driver':
            return firstName + ' drives';
        default: return firstName + ' nothing';
    }
}

console.log(whatDoYouDo("John", "asdf"));

*/

/*
function getAge(birthYear)
{
    return 2019 - birthYear;
}

console.log(getAge(1970));

function getAverage(arr)
{
    var ret = 0;
    arr.forEach(element => {
        ret+= element;
    });
    
    return ret/arr.length;
}


var johnTeamScores = [100, 100, 100];
var mikeTeamScores = [100, 100, 100];
var maryTeamScores = [101, 100, 100];

var johnTeamAverage = getAverage(johnTeamScores);
var mikeTeamAverage = getAverage(mikeTeamScores);
var maryTeamAverage = getAverage(maryTeamScores);
var winnerTeam;



switch(true)
{
    case johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage:
        winnerTeam = "John's"
        break;
        case mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage: 
        winnerTeam = "Mike's"
        break;
        case maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage: 
        winnerTeam = "Marys's"
        break;

        default:
        winnerTeam = "no"
}
console.log( winnerTeam + " team won" + "with score " + Math.max(johnTeamAverage, mikeTeamAverage, maryTeamAverage));
*/
/*
var age = 19;

var job = 'instructor';
switch(true)
{
    case age < 18:
    case age === 18:
        console.log('<=18');
    break;
    default:
        console.log('>18');
    break;
    
}


var job = 'instructor';
switch(job)
{
    case 'teacher':
    case 'instructor':
        console.log('teaches');
    break;
    case 'driver':
        console.log('drives');
    break;
    default:
        console.log('someething else');
    break;
    
}


var firstName = 'John';
var civilStatus = 'married';
var age = 16;

var drink  = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);


if(civilStatus === 'married')
{
    console.log(firstName + ' is married!');
}
else if (civilStatus === 'single' && age < 18 )
{
    console.log(firstName + ' too young for marriage');
}
else
{
    console.log(firstName + ' single!');
}




var mMark = 78;
var hMark = 1.69;

var mJohn = 92;
var hJohn = 1.95;

var bmiMark = mMark / (hMark **2);
var bmiJohn = mJohn / (hJohn **2);

var bmiHigher = bmiMark > bmiJohn;

console.log('bmiMark = ' + bmiMark + ' is higher than bmiJohn =' + bmiJohn + ': ' + bmiHigher);
*/


/*
//Logical operators
var currentYear = 2018
var yearJohn = 1989;
var ageJohn = currentYear - yearJohn;
var fullAge = 18;

var isFullAge = currentYear - yearJohn >= fullAge;

console.log(isFullAge);

//Math
var birthYearJohn = currentYear - ageJohn;
var birthYearMark = currentYear - ageMark;

//typeof operator
console.log(typeof (ageJohn < ageMark));
console.log(typeof ageJohn);
var x;
console.log(typeof x);


var firstName = "John";
var lastName = "Smith";
var age = 20;
var fullAge = true;
console.log(lastName);
console.log(fullAge);

var isMarried = false;

console.log(firstName + ' is ' + age + ' years old. Married: ' + isMarried);

//Var mutation
age = 'twenty';

//alert(firstName + ' is ' + age + ' years old. Married: ' + isMarried);

var firstName = prompt('Last name? ');
console.log(firstName + ' is ' + age + ' years old. Married: ' + isMarried);
*/