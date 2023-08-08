/*
//THIS FALLS OUT OF SCOPE. USE SELF OR THAT

let MyClass = function MyClass() { 
    this.fullName = '';

this.setUserName = function(firstName, lastName)
{
// this refers to the fullName property
// in this object
this.fullName = firstName + " " + lastName;
// Displays CORRECT result 
console.log(this.fullName);
}
}

function getUserInput(firstName, lastName, callback)	{ 
    callback (firstName, lastName);

}

let obj = new MyClass();
getUserInput("Bob", "Smith", obj.setUserName);
//Displays blank / INCORRECT result 
console.log (obj.fullName);
*/

/*
//fixed
let MyClass = function MyClass() { 
    this.fullName = '';
let self = this;

this.setUserName = function(firstName, lastName)
{
// this refers to the fullName property
// in this object
self.fullName = firstName + " " + lastName;
//Displays CORRECT result 
console.log(self.fullName);
}
}


function getUserInput(firstName, lastName, callback)	{
// Now save the names
callback (firstName, lastName);
}

let obj = new MyClass();
getUserInput("Bob", "Smith", obj.setUserName);
//Also displays CORRECT result 
console.log (obj.fullName);
*/

/*
//FIX W BIND

let MyClass = function MyClass() { this.fullName = '';

this.setUserName = (function(firstName, lastName)
{
// this refers to the fullName property
// in this object
this.fullName = firstName + " " + lastName;
// Displays CORRECT result 
console.log(this.fullName);
}).bind(this);
}

function getUserInput(firstName, lastName, callback)	{ 
    callback (firstName, lastName);
}

let obj = new MyClass();
getUserInput("Bob", "Smith", obj.setUserName);
//Displays CORRECT result 
console.log (obj.fullName);
*/


//ARROW FUNCTION
let MyClass = function MyClass() { 
    this.fullName = '';

this.setUserName = (firstName, lastName) =>
{
// this refers to the fullName property
// in this object
this.fullName = firstName + " " + lastName;
// Displays CORRECT result 
console.log(this.fullName);
}
}

function getUserInput(firstName, lastName, callback)	{ 
    callback (firstName, lastName);
}

let obj = new MyClass();
getUserInput("Bob", "Smith", obj.setUserName);
//Displays CORRECT result 
console.log (obj.fullName);
