// const add = x => {
//   return y => {
//     return z => {
//       return x + y + z;
//     };
//   };
// };

// // console.log(add(1)(3)(3));
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     // console.log(i);
//   }, i * 1000);
// } ////0,1,2,3,4,5

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     // console.log(i);
//   }, i * 1000);
// } /// 5555555555555

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(foo1());
// console.log(foo2())

// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

var arr = [1, 2, 3];

arr[10] = 99;
console.log(arr);

const obj = {
  name:"a",
  age:"25", 
  phone:"232323"
}

const size  = Object.keys(obj).length;
console.log(size)