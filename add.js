

function processArray(strArray) {
  return strArray.map(str => {
    let processedStr = str.replace(/\n/g, ',');
    if (processedStr.endsWith(',')) {
      processedStr = processedStr.slice(0, -1);
    }
    return processedStr;
  });
}

function addHelper(str) {
  if (str === "") {
    return 0;
  }
  return str.split(',')
            .map(Number)
            .reduce((sum, curr) => sum + curr, 0);
}

function add(strArray){
  let arrayProccessed = processArray(strArray)
  return arrayProccessed.map(addHelper);
}


export default add;