// console.log("Hello World");
// console.log("Hà nội hôm nay quá nóng !!");

// 1. Kiểu dữ liệu trong JS
// String => chuỗi ký tự chứa nhiều từ chữ cái khác nhau => "kjsfdnskndfskjdf!@$#$^%^*"
// Number => 1,325,654645, 1
// Boolean => true/false
// undefine
// null

// 2. Khai báo 1 biến: let, const: không thể khai báo 2 cái biến giống nhau được
// Note: cách đặt biến: biến đó chỉ dc tồn tại 1 lần, Ví du myFavoriteCar
// let name = "Phương";
// name = "Giang";
// name = 100;
// name = true;
// let output = ;
// console.log("My name is " + name);
// let age = 22;
// console.log(age);
// let isSingle = false;
// console.log(isSingle);
// let my_favorite_car = "Volvo";
// let name = 20;
// console.log(my_favorite_car);
// console.log(d);
// console.log(name + ", " + age + ", " + isSingle);

// 3. Prompt, alert
// let n = 123;
// alert("Link này không tồn tại" + n);

// let inputName = prompt("Enter your name ?");
// console.log("My name is " + inputName);

// let inputAge = prompt("Enter your age");
// console.log("My age is " + inputAge);

// 4. Toán tử trong JS: +, -, *, /, **, %

// let a = 10;
// let b = "2";

// let c = a - b;
// console.log("C = " + c);

// let n = Number(prompt("Enter đáy lớn"));
console.log(Math.sqrt(64)); // Math.sqrt() dấu căn
// console.log(Number(n) + 10);

// 5. Các phép so sánh trong JS: <, >, <=, >=, &&, ||, ==, !=
// 6. If else: Nếu thì, nếu cái
// if(điều kiện) {
//  nếu điều kiện đúng thì sẽ thực thi các câu lệnh ở trong if
//} else {
//  chỉ xảy ra khi không thỏa mãn bất cứ điều kiện nào trong if
//}

// Ví dù:

// 7. Function: dùng để thức thi 1 chức năng nào đó
// Function chỉ được thực thi kha ta gọi tên function
// 1. Void function
// function bai1() {
//   let LongCrush = prompt("Enter Long's crush name ?");
//   if (LongCrush == "Long") {
//     alert("Đây chính là tên crush thứ 1 của Long");
//   } else if (LongCrush == "Vân") {
//     alert("Đây chính là tên crush thứ 2 của Long");
//   } else {
//     alert("Đây không phải ng long thích");
//   }
// }

// sayHello();

// 2. Function have parameter
// function countNoParameter() {
//   let a = 80;
//   let b = 100;
//   console.log("Tổng 2 số = " + (a + b));
// }
// countNoParameter();

// Bài chữa
function countPlus(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

function countMinus(a, b) {
  console.log(a + " - " + b + " = " + (a - b));
}

function countMulti(a, b) {
  console.log(a + " x " + b + " = " + a * b);
}

function countDivide(a, b) {
  console.log(a + " / " + b + " = " + a / b);
}

let operation = prompt("Nhập phép tình nhân chia cộng trừ");

if (operation == "cộng") {
  let a = Number(prompt("Enter a"));
  let b = Number(prompt("Enter b"));
  countPlus(a, b);
} else if (operation == "trừ") {
  let a = Number(prompt("Enter a"));
  let b = Number(prompt("Enter b"));
  countMinus(a, b);
} else if (operation == "nhân") {
  let a = Number(prompt("Enter a"));
  let b = Number(prompt("Enter b"));
  countMulti(a, b);
} else if (operation == "chia") {
  let a = Number(prompt("Enter a"));
  let b = Number(prompt("Enter b"));
  countDivide(a, b);
} else {
  alert("Phép tính không hợp lệ");
}
