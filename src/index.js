const add = x => {
  return y => {
    return z => {
      return x + y + z;
    };
  };
};

console.log(add(1)(3)(3));
