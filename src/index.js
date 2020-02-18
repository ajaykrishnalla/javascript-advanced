const add = x => {
  return y => {
    return z => {
      console.dir(x);
      return x + y + z;
    };
  };
};

console.log(add(1)(3)(3));
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} ////0,1,2,3,4,5

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
} /// 5555555555555
