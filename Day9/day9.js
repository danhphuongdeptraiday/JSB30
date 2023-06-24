/*
    in ra console dòng chữ hello world bằng 4 kiểu function khác nhau
    1. Void Function
    2. Return function
    3. Function have parameter
    4. Function have parameter and return at the same time
*/

// // 1
// function voidFunction() {
//   console.log("Hello World");
// }
// voidFunction();

// // 2
// function returnFunction() {
//   return "Hello World";
// }
// console.log(returnFunction());

// // 3
// function parameterFunction(a, b) {
//   console.log(a + " " + b);
// }
// parameterFunction("Hello", "World");

// // 4
// function combineReturnParameter(a, b) {
//   return a + " " + b;
// }
// let t = combineReturnParameter("Hello", "World");
// console.log(t);

// Chua bai 20;

// function bai20(n) {
//   if (n % 2 == 0) {
//     alert("Số chẵn");
//   } else {
//     alert("Số lẻ");
//   }
// }

// let n = Number(prompt("Enter n ?"));

// bai20(n);

// function run(year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// }

// run(2100);

// ĐỐi tượng trong JS: vd: person
// THuộc tính: name, age, address, gender,..
// CHức năng: ăn, ngủ, chơi, học bài

let person1 = {
  name: "Phương",
  age: 22,
  address: "Tây hồ, Hà nội",
  teaching: function () {
    console.log("Giảng JSB-30");
  },
  coding: function () {
    return "Coding HTML, CSS, JS";
  },
};

let person2 = {
  name: "Ly",
  age: 22,
  address: "Đông Ngạc",
};

if (person1.age > person2.age) {
  console.log(person1.name + " có số tuổi lớn hơn " + person2.name);
} else if (person1.age < person2.age) {
  console.log(person2.name + " có số tuổi lớn hơn " + person1.name);
} else {
  console.log(person1.name + " có số tuổi bằng " + person2.name);
}

// Dom:
let btn = document.getElementById("btn");
let box = document.querySelector(".box");
// Hàm thuộc tính để lấy nội dung bên trong 1 thẻ
// console.log(btn.innerText);

// Hàm để gán sự kiến cho 1 nút

// thuộc style
// btn.style.backgroundColor = "red";
box.style.backgroundColor = "red";
btn.addEventListener("click", function () {
  // console.log("hello");
  if (box.style.backgroundColor == "blue") {
    box.style.backgroundColor = "red";
  } else if (box.style.backgroundColor == "red") {
    box.style.backgroundColor = "blue";
  }
});
