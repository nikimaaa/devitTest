var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function recuseLog(array, start = 0) {
  if (start >= array.length || start < 0) {
    return;
  }
  else {
    console.log(array[start]);
    recuseLog(array, ++start);
  }
}

recuseLog(arr);