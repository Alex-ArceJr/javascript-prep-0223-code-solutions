/* exported compact */
function compact(array) {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
