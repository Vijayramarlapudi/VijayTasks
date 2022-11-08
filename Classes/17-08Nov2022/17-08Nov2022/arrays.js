// Arrays:
// Methods of Arrays

const arr = [1,2,3,4]

// // total count of an array
// console.log(arr.length)

// // value at position/index 2
// console.log(arr.at(2))

// // add new element at start of an array
// arr.unshift(11)
// console.log(arr)

// // remove first element of an array
// arr.shift()
// console.log(arr)

// // add new element at the end of an array
// arr.push(5) 
// console.log(arr)

// // remove last element of an array
// arr.pop()
// console.log(arr)

// // replace all the elements with the given value
// arr.fill(6)
// console.log(arr)

// // convert from array to string
// console.log(arr.join(""))

// // comma seperated string
// console.log(arr.join(","))

// // convert from string to array
// console.log(Array.from("ABCDEF"))

// // checks array or not
// console.log(Array.isArray(arr))

// // revers an array
// console.log(arr.reverse())

// // verifies whether given value is included in array 
// console.log(arr.includes(3))

// // creates new array with 
// var newArr = arr.map(function(item){
//     return item * 3
// })
// console.log(newArr)

// // arr = [1,2,3,4]
// // method returns the value of the first element that passes a test.
// var x = arr.find((item) => item > 2)
// console.log(x)

// // creates new array with the filtered values
// var newArr = arr.filter((number) => number > 2);
// console.log(newArr)

// // arr = [1,2,3,4]
// // executes a function for each array element and returns true if the function returns true for all elements
// var bl = arr.every((item) => item > 2);
// console.log(bl)

// arr = [1,2,3,4]
// // executes the callback function once for each array element and returns true (and stops) if the function returns true for one of the array elements.
// var bl = arr.some((item) => item > 2);
// console.log(bl)

// // find index of the given value
// var index = arr.findIndex((item) => item===3)
// console.log(index)

// // arr = [1,2,3,4]
// // executes a reducer function for array element and returns a single value: the function's accumulated result
// var total = arr.reduce((total,number) => total+number,0)
// console.log(total)

// // arr = [1,2,3,4]
// // returns a new array from a given start and up to a (not inclusive) given end.
// var newArr = arr.slice(0,2)
// console.log(newArr)

// // for each
// arr.forEach((item) => console.log(item * 2))

// combine two arrays into a single array
// arr1 = [1,2,3,4]
// arr2 = [4,5,6,1]
// console.log(arr1.concat(arr2))

// // sort asc
// arr1 = [5,9,1,2]
// var newArr = arr1.sort()
// console.log(newArr)

// // sort dsc
// arr1 = [5,9,1,2]
// var newArr = arr1.sort()
// newArr.reverse()
// console.log(newArr)