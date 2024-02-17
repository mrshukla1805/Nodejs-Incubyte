

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

  let numbers = numbersPart.split(delimiter).map(Number);
  let negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return numbers.reduce((sum, curr) => sum + curr, 0);
}

function add(strArray){
  return strArray.map(addHelper);
}


export default add;