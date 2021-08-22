//js is a programming language,which embeds logic in our application (semicolon(;) is not compulsory and either '' or "" both are fine with JavaScript) 
console.log('Hello ....')

// Displaying outputs 
// alert('Alert Occurred!')
// console.warn('This is a warning')
// console.error('This is an error')

//JS BASICS
// Variable and Constants -> VariableName = variableValue (constant)
console.log(10+20) //30

// Data Types -> primitive -> Number, String, Boolean, Null and Undefined , Symbols
// Non-Primitive Data Types -> Array, Objects, ArrayOfObjects, JSON

a=10.2345
b='Technology for All'
c=false
d=undefined
e=null

console.log(typeof a) // number
console.log(typeof b) //string
console.log(typeof c) //Boolean
console.log(typeof d) //undefined
console.log(typeof e) // it will show the type as object instead of null (because it is a bug from JavaScript)

// Declaration of a variable -> let, var, const(ES6)
let a1 = 25 // let is used for scoping(ES6) -> we can say that it has local scope 
console.log(a1)

 var a2 = 'Hi, I am a Data'    // var keyword is global in nature 
 console.log(a2)

 const a3 = "Jyotsna"     // we have to declare and initialize the const value at the same time, we cannot just declare it rather we have to define the value then and there itself
console.log(a3)

//const a3 ="priya" and also we cannot change or assign another value to a const variable beacuse as we know it is contant and value of contant remain same throughout the program, it doesn't changes
// console.log(a3)
 

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Strings and String Methods
const str = "JavaScript, C, C++, Python, Ruby, Objective-C, Swift"
console.log(str.length)          // to find  the length of the string
console.log(str.toUpperCase())   // to change to uppercase
console.log(str.toLowerCase())   // to change to lowercase
console.log(str.substr(7))       // It will return the substring from the specified position 
console.log(str.substring(3,12)) // it will return the string starting from 3 and endng at 10 / startIndex(included), endIndex(Exculded)

const arr = str.split(', ')      // returns you with an array
console.log(arr[4])              // Ruby (will return the value of specified index)

console.log('Index of i : ' + str.indexOf('C'))  // It is case Sensitive

console.log('My lucky number is : ' + (20-2) + ', This is an example.')  // '+' -> used for string concatination also

// Strings can be put in ''(single quote), ""(double quote), ``(backtick, tilde symbol on keyboard, besides 1)
MyLuckyNoIs = 18
console.log(`My lucky number is : ${MyLuckyNoIs}, This is an example.`) // Here, String is in backtick and in this, to access a variable we have to use $ symbol to print a value of variable

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Arrays in JavaScript
 const names = new Array('Jiya','Ash','Mayuri','priyansh','Aarav')
 console.log(names)
console.log(names[1]) //Ash

//ES6 -> use of [] symbol in Array
 const courses =['data Science', 'FSD', 'Machine Learning', 'Data Structures']
 console.log(courses)
 console.log(courses[1] )
  const items =[10,10.5,'jenny',true,null,undefined]
  console.log(items)

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   
  const user = {
      firstName : 'Harry',
      lastName : 'Potter',
      age : 22,

      hobbies : ['Magic','Getting in trouble', 'Wandering'],

      role : 'Student',
      isCool : true,

      address : {       //Object within object
          street : '5th Avenue',
          city : 'London',
          country : 'United kingdom'
      }
  }


  console.log(user)
  //Access values from object
  console.log(`Hi, my name is ${user.firstname} ${user.lastName}.I am ${user.age} years old. I am a ${user.role}. My hobbies are ${user.hobbies[0]}, ${user.hobbies[1]}, ${user.hobbies[2]}. I live in ${user.address.city}`)

  //Arrays of Object -> [{},{},{},{}]
  const employee =[    //Array
    {    // object-0 
        emp_id : 1001,
        designation : 'SDE' ,   // software developement 
        company : 'Wipro',
        yearsOfExp : 3,
        skills : ['C', 'C++', 'Java'],      // Array
        location : {                        // Object
            officsLocation : 'Mumbai',
            pin : 12345
        }
          
    },
    {   //object-1
        emp_id : 1023,
        designation : 'Tester',
        company : 'Facebook',
        yearsOfExp : 3,
        skills : ['Mocha', 'JUnit'],
        location : {
            officsLocation : 'Hyderabad',
            pin : 12342
        }

    },
    { // object -2
        emp_id : 1021,
        designation : 'SME',    // software Management
        company : 'Apple',
        yearsOfExp : 3,
        skills : ['JS', 'React', 'Angular'],
        location : {
            officsLocation : 'Banglore',
            pin : 12323
        }

    },
    { // object - 3
        emp_id : 1065,
        designation : 'Content Designer', 
        company : 'Netflix',
        yearsOfExp : 2,
        skills : ['Wordpress', 'Photoshop'],
        location : {
            officeLocation : 'Delhi',
            pin : 12001
        }
    }
  ]
     
  console.log(employee)
   // Accessing the ArrayOfObjects
   
   //1] I want to aceess emp_id of each emplyoee
   console.log(`${employee[0].emp_id}, ${employee[1].emp_id},${employee[2].emp_id}, ${employee[3].emp_id}`)

   //2] I want to access one skill of each employees
   console.log(`${employee[0].skills[0]},${employee[1].skills[0]},${employee[2].skills[0]},${employee[3].skills[0]},`)

   //3] I want to find thw office location of all employee
   console.log(`${employee[0].location.officeLocation}, ${employee[1].location.officeLocation},${employee[2].location.officeLocation},${employee[3].location.officeLocation}`)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   //conditional in javaScripts
   if(5<10){
       console.log('5 is less than 10')  //// less than 10
   } else{
       console.log('5 is greater than 10')
   }

   if(employee[0].yearsOfExp < 3) {
       console.log('Not fit for JOB')
   }else{
       console.log('fit for job') // fit for job  
   }
 

   //short hand for if -else--> condition ? true:false

employee[1].yearsOfExp > 3 ? console.log('fit for JOB') : console.log('Not fit for the job')

// if,else-if, else
//Age-Tracker - (if<18 then [kid]), ( >= 18 [teen] < 30), ( if >= 30 then [adult] )

const age = 20
if(age < 18) {
    console.log('Hey, you are a KID')
} else if(age >= 18 && age < 30) {
    console.log('Hey, you are TEEN')    // TEEN
} else {
    console.log('Hey, you are an ADULT')
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//*****FUN STUFF***** 

const answer = 10/0 
console.log(answer) /// Infinity

const answer1 = 0/10
console.log(answer1) //0

const answer2 =0/0
console.log(answer2)  // NAN ->not a a number

const answer3 = 20/ 'jiya'
console.log(answer3) //NAN

const values =['🥚','🐓']    // Go to https://emojipedia.org/rooster/ --> and copy paste the emoji u want
const output = values.sort() // sort the values
console.log(output) // hence the chicken came first and JavaScript told us that the hen came first 😜🤩😂

if ( 11 == '11') {             // It is comparing only strings (It will give output irrespective of data types) Here, it is converting string into number and then comparing
    console.log('They are same')       // same
} else {
    console.log('They are not same')
}

if ( 11 === '11') {            // It is comparing data types also
    console.log('They are same')
} else {
    console.log('They are not same')    // not same
}

//----------------------------------------------------------------------------------------------------------------------------------------------

//JSON -> JavaScript Object Notation
// stringify() -> Convert ArrayOfObjects into JSON (a function used to display array of objects)

const jsonData= JSON.stringify(employee) // employee-> array of objects
console.log(jsonData)    // Keys are also enclosed in doble quote (Property name is in "")

// parse() -> Convert JSON into ArrayOfObjects
 
const arrayOfObject = JSON.parse(jsonData)   // jsonData -> JSON Object
console.log(arrayOfObject)   //simply ArrayOfObjects

//----------------------------------------------------------------------------------------------------------------------------------

//to understand the scope of a const, var and let varibles
// age >30 ? half the age : double the age 
const Age = 30
if( Age > 30){
    let newAge = Age/2 // let has a local scope and const also has a local scope
    console.log(newAge)
}else{
    var newAge = Age*2 // var has a global scope
    console.log(newAge)
} 
console.log(newAge)

//--------------------------------------------------------------------------------------------------------------------------------------------------

//Loops ->
// Basic loops :- for() and while()
// for (initialization; condition; inc/dec )
 for( let i=1; i<=15; i++){
 console.log('value of i : ' + i)
 }

 //Table of 5
 for (let i =5; i<=50; i++){
     console.log(`5 * ${i/5} = ${i}`)
 }

 // while Loop
// initialization
// while ( condition ) {
//     inc / dec
// }  

let i=1
while(i<=10){
    console.log(`The value of i : ${i}`)
    i++
}

//print table of 12 
let j = 12
while( j <= 120) {
    console.log(`12 * ${j/12} = ${j}`)
    j += 12
}
//---------------------------------------------------------------------------------
// higher order Array Methods -> for-of, for-in, map, filter, reduce
// Array of Objects
const todos = [
    {
        id : 1,
        task : 'Meeting with the team',
        isCompleted : true
    },
    {
        id : 2,
        task : 'Take out the Trash',
        isCompleted : false
    },
    {
        id : 3,
        task : 'Take my dog for a walk',
        isCompleted : true
    }
]

console.log('length of an array :' + todos.length) // length of an array

const fruits = ['Apple' , 'Mango' , 'Banana', 'Pear', 'Watermelon']
console.log('Length = ' + fruits.length)

console.log(todos[0].task)
console.log(todos[1].task)
console.log(todos[2].task)
 
 for(let i = 0; i < todos.length; i++){
     console.log(todos[i].id = todos[i].id +5)
 }

// Higher order array methods are used only in two conditions :-
// 1. When you are iterating on the whole array
// 2. When you are not using something like this -  array[index]

//for-of---. for (let local-variable of array-name)
for( let i of todos) {                  // for( let todo of todos) single is todo and todos are multiple (we can take another, it is just a variable name)
    console.log(i.isCompleted)          // console.log(todo.isCompleted)
}
// print only those tasks whose isCompleted is true
for( let todo of todos ) {
    todo.isCompleted === true ? console.log(todo.task) : ''      // if true then print else do nothing 
}
 //same thing with simple for loop :-
// for( let i = 0; i < todos.length; i++) {
//     if(todos[i].isCompleted === true) {
//         console.log(todos[i].task)
//     } else {
//         console.log('')
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// *** Functions in JavaScript ***
// function -> Re-usable block of code that u can use anywhere in the code

// Two ways of creating function in JavaScript
// 1. Traditional Way
// 2. ES6 Way - new &bMost popular

// First Way --> function functionName (parameters) { ....bodyOfFunction  }
function greet(name) {
    console.log(`Happy rakashabandhan ${name}`)
}

greet('Jiya')         // calling function (default type of parameter is object and return type of function is also an object by default)

function add(a, b) {
    return ( a + b)
}

console.log(`value is : ` + add(15, 20))
const result = add(100, 200)
console.log('Addition is = ' + result)    // either u can use '' / ""  or  `` / if u r using backquote(``) the u have to use ${} symbol to print the value of a variable.
