

function processDelimiter(str) {
  let delimiter = ',';
  let numbersPart = str;
  if (str.startsWith("//")) {
    let newlineIndex = str.indexOf('\n');
    if (newlineIndex !== -1) {
      delimiter = str.substring(2, newlineIndex);
      numbersPart = str.substring(newlineIndex + 1);
    }
  }
  numbersPart = numbersPart.replace(/\n/g, delimiter);

  return { numbersPart, delimiter };
}

function addHelper(str) {
  if (str === "") {
    return 0;
  }
  let { numbersPart, delimiter } = processDelimiter(str);
  
  return numbersPart.split(delimiter)
            .map(Number)
            .reduce((sum, curr) => sum + curr, 0);
}

function add(strArray){
  return strArray.map(addHelper);
}


export default add;