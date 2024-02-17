
function addHelper(str) {
  if (str === "") {
    return 0;
  }
  return str.split(',')
            .map(Number)
            .reduce((sum, curr) => sum + curr, 0);
}

function add(strArray){
  return strArray.map(addHelper);
}


export default add;