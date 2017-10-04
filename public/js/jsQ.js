/**
 * Created by Jonathan on 7/11/2017.
 */

// Find the middle number/numbers
console.log("Find middle number.");
function findMiddle(arr){
    var myArr = arr.sort(function(a, b){ return a - b });
    var middle = Math.floor((myArr.length -1)/2);
    if(middle%2 == 0){
        console.log("The middle numbers is " + arr[middle]);
    } else {
        console.log("The middle numbers are " + arr[middle] + " and " + arr[middle+1]);
    }
}
var arr = [23, 34, 10, 19];
findMiddle(arr);
var arr2 = [99, 3, 10, 46, 27];
findMiddle(arr2);


// Q1: Question: How would you make this work?
// add(2, 5); // 7
// add(2)(5); // 7

var add = function (x, y) {
    if(arguments.length<2){
        return function(y){
            return x+y;
        }
    }
    return x+y;
};
console.log("\nQ1.");
console.log(add(2,5));
console.log(add(2)(5));


// Q2:
// Array filter Array
// var a = [1,2,3,4];
// var b = [3,4];
// results: return filter= [1,2]
var a = [1,2,3,4];
var b = [3,4];
var filter = [];
for(var i=0; i<a.length; i++){
    if(a.indexOf(b[i])!=-1){
        filter.push(a[i]);
    }
}
console.log("\nQ2.");
console.log(filter);

// Q3.
// Count string
// str = “aaabbaaaa”
// result a3b2a4
var str = "aaabbaaaa";
function getCharCount(str) {
    var result = str.charAt(0);
    var count = 1;
    if (str.length == 1) {
        result += count;
        return result;
    } else {
        for(var i=1;i<str.length;i++) {
            if(str.charAt(i) != str.charAt(i-1)) {
                result += count + str.charAt(i);
                count = 1;
            } else {
                count++;
            }
            if (i == str.length - 1) {
                result += count;
            }
        }
        return result;
    }
}
console.log("\nQ3.");
console.log(getCharCount(str));

// Q4: group count object array
// var list = [
//     {user:"mike", age:19},
//     {user:"mike", age:21},
//     {user:"mike", age:19},
//     {user:"Dave", age:31},
//     {user:"Tom", age:18},
//     {user:"Tom", age:18},
// ];
console.log("\nQ4.");
var myList = [
    {user:"mike", age:19},
    {user:"mike", age:21},
    {user:"mike", age:19},
    {user:"Dave", age:31},
    {user:"Tom", age:18},
    {user:"Tom", age:18},
];
var groupByUser = myList.reduce(function (obj, item) {
    obj[item.user] = obj[item.user] || [];
    obj[item.user].push(item.age);
    return obj;
    }, {});

var users = Object.keys(groupByUser).map(function(key){
    return {user:key, age:groupByUser[key]};
    });
console.log(JSON.stringify(users));


// Q5: Delete the duplicate array
// var list = [
//     {user:"mike"},
//     {user:"mike"},
//     {user:"mike"},
//     {user:"Dave"},
//     {user:"Tom"},
//     {user:"Tom"},
// ];
// result:  var arr = [ 'milk ',Dave', 'Tom' ];

var list = [
    {user:"mike"},
    {user:"mike"},
    {user:"mike"},
    {user:"Dave"},
    {user:"Tom"},
    {user:"Tom"}
];
console.log("\nQ5.");
var userArr = list.map(function(item){ return item.user });
var userResult = [];
for(var i=0; i<userArr.length; i++) {
    for(var j=i+1; j<userArr.length; j++) {
        if (userResult.indexOf(userArr[j])==-1) {
            userResult.push(userArr[j]);
        }
    }
}
console.log(userResult);

// Q6. Inheritance in JS
console.log("\nQ6.");
var training = {
    batch: "",
    company: "",
    info: function () {
        console.log("I'm in batch " + this.batch + " at " + this.company + ".");
    }
};
var myTraining = Object.create(training);
myTraining.batch = "2017";
myTraining.company = "SitaCorp";
myTraining.info();

// Q7. Put ten <li> tag in one uses html, css
console.log("\nQ7.");
// CSS: li { float: left; }

// Q8. Write a function that will loop through a list of integers and print the index of each element after a 2 second delay.
console.log("\nQ8.");
var myArr = [1,2,3,4,5];
for(var i=0; i<myArr.length; i++){
    (function (index) {
            setTimeout(function () { console.log(index); }, i*2000);
        }
    )(i);
}
