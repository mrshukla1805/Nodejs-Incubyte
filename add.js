
function add(str) {
  if (str === "") {
    return 0;
  }
  return str.split(',')
            .map(Number)
            .reduce((sum, curr) => sum + curr, 0);
}


export default add;