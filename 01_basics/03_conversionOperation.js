let score = true;
console.log(typeof score);
console.log(typeof(score)); //method

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
//  "33abc" => NaN
// true => 1; false => 0
// null => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => ture; 0=> false;
// "" => falsehtuture 
// "hitesh" => true

let someNumber =33;
let stringNumber = String(someNumber);
console.log(stringNumber);

const newUser = new Object();

const course ={
    coursename = "js in urdu",
    price: "999",
    courseTeacher: "ahmad"
}

// course.courseInstructor

// console.log(courseInstructor);

const {courseInstructor: instructor} = course;

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }

    return  `${username} just logged in`;
}
console.log(loginUserMessage()); // undefined just logged in
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));