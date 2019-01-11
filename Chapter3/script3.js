////////////////
// Lecture this keyword
//console.log(this);

var john = 
{
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function()
    {
        console.log(2019 - this.yearOfBirth);
        console.log(this);
   }


}

john.calculateAge();


var mike =
{
    name: 'Mike',
    yearOfBirth: 1978
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

/*
///////////////////////////////////////
// Lecture: Hoisting
calculateAge(1969);
function calculateAge(year)
{
    console.log(2019 - year);
}



var retirement = function(year)
{
    console.log(65 - (2019-year));
}

retirement(1990);


var age = 20;

function foo()
{
    console.log(age);
    //var age = 65;

}
foo();
console.log(age);

*/





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









