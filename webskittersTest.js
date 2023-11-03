// 7. [1,2,3,4,54,5,6,7,7] only print index number

//sol.

// let arr = [1, 2, 3, 4, 54, 5, 6, 7, 7]

// for (let i = 0; i < arr.length; i++) {
//     console.log(`index of ${arr[i]} = ${i}`)
// }

// 8. What is the index number of 8 [1, 2, 3, 4, 5, 6, 7, 7, 8]
// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8]
// let index = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 8) {
//         index == arr[i]
//         console.log(`Index of 8 = ${arr[i]}`)
//     }
// }

//9.Print your name 100 times



// for (let i = 1; i <= 100; i++) {
//     console.log(`${i} = My name is Rahul Kumar sahu`)
// }


//10."llllllllllllui"print only ui

let str = "llllllllllllui"

let newStr = str.slice(12, 14)
console.log(newStr)

//11)[1,2,3,4, 5, 6, 7, 8, 89] delete 8 using splice

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 89]

// let newArr = arr.splice(7, 1)
// console.log(arr)


//6)"kkkkkkkkkk"print index wise

// let str = "kkkkkkkkkk"
// let n = str.length
// let newStr = str.split("")
// for (let i = 0; i < n; i++) {
//     console.log(`index of ${newStr[i]} = ${i}`)
// }

//5)"TTTTTTTT" convert in small letter

// let str = "TTTTTTTT"
// let newStr = str.toLocaleLowerCase()
// console.log(newStr)

//12)How many data types in js

// ther are two type of data type in Java Script
//1. primitive data type
//example: number , string , boolean , null , undefined ,big Int,

//2. non- primitive data type
//example: objects

//13) what is DOM
// Full From of Dom is Document Object Model
//this  is used to do intraction with the webBrowser

// to add functionality to the web Pages


// 14) what is global scope and local scope
// when we declare  variable ,function  above of the program and that variable can be accessiabe to anywhere in the program is caleed global scope
// example

// when we declare variable , function in the curly braces and the variable can be accessiable only in the culry braces on the progrma is called local scope

// var a = 10 // global scope
// let b = 20 // global scope

// let sum = a + b
// console.log(sum)

// function add(d, c) { // global scope function
//     return b + c
// }

// let d = 23
// let c = 24
// let result = add(d, c)
// console.log(result)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i = 0; i < arr.length; i++) {
//     let sum2 = 0 //local scope
//     sum2 += arr[i]
// }

// console.log(sum2)// gives error

//16) define array of object and print only name property value

// let obj = [{ fName: "rahul", lName: "Sahu", address: "Burdwan" },
// { fName: "Piyush", lName: "Mondal", address: "kolkata" },
// { fName: "Sagnik", lName: "Sir", address: "Malda" },
// { fName: "Barry", lName: "Allen", address: "central city" }]

// let nameObj = obj.map(function myFunction(e) {
//     let value = e.fName
//     return value
// })

// console.log(nameObj)

//17) Mapping an Array of string  to lower Case

// let arrStr = ["RAHUL", "PIYUSH", "SHASHI"]

// let lowerStr = arrStr.map(function toLower(e) {
//     let lower = e.toLocaleLowerCase()
//     return lower
// })

// console.log(lowerStr)

//18) Mapping an Array of number to String

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let toString = arr.map(function toSting(e) {
//     let toStr = e.toString()
//     return toStr
// })

// console.log(toString)

//19. Mapping with nested array

// let arr = [[1, 2, 3], [3, 4, 5], [6, 7, 8]]

// let newArr = arr.map(function myFunction(e) {

// })



//1)Filtering an array of numbers to get even numbers:custom method and pre-define method both use

//pre-define
// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evenNum = arrNum.filter(function myFunction(e) {
//     let num = e % 2 == 0
//     return num
// })

// console.log(evenNum)

// custom

// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let evenNum = []
// let count = 0

// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 2 != 0) {
//         count++
//     }

//     else {
//         evenNum.push(arrNum[i])
//     }


// }

// console.log(evenNum)


//2)Filtering an array of objects based on a property value:custom method and pre-define method both use

// let obj = [{ fName: "rahul", lName: "Sahu", address: "Burdwan", age: 25 },
// { fName: "Piyush", lName: "Mondal", address: "kolkata", age: 26 },
// { fName: "Sagnik", lName: "Sir", address: "Malda", age: 27 },
// { fName: "Barry", lName: "Allen", address: "central city", age: 28 }]


// let newObj = obj.filter(function myFunction(e) {
//     let value = e.age > 26
//     return value
// })
// console.log(newObj)


// let newObj = obj.filter(function myFunction(e) {
//     let value = e.fName.length >= 6
//     return value
// })
// console.log(newObj)

// let newObj = obj.filter(function myFunction(e) {
//     let value = e.address == "kolkata"
//     return value
// })
// console.log(newObj)


// let obj = [{ fName: "rahul", lName: "Sahu", address: "Burdwan", age: 25 },
// { fName: "Piyush", lName: "Mondal", address: "kolkata", age: 26 },
// { fName: "Sagnik", lName: "Sir", address: "Malda", age: 27 },
// { fName: "Barry", lName: "Allen", address: "central city", age: 28 }]

// let newObj = obj[1, 1].age == 26

// console.log(newObj)

//3)Filtering based on multiple conditions: done in avobe question

//4)Handling case-insensitive filtering:

// let str = "Rahul"

// let obj = ["rahul", "Rahul", "rAhul", "rAHUL"]



// let newStr = obj.filter(function myFunction(e) {
//     let value = e === str
//     return value

// })

// console.log(newStr)








