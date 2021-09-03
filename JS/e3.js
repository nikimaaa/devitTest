function MultiplicatorUnitFailure() { }

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      console.log(error);
    }
  }
}

console.log(reliableMultiply(8, 8));