// Code your solution here
function findMatching(array, searchValue){

  return array.filter((element) => element.toUpperCase() === searchValue.toUpperCase());

}

function fuzzyMatch(array, searchValue){

  return array.filter((element) => element.substring(0, 2) === searchValue);

}


function matchName(array, searchValue){

  return array.filter((element) => element.name === searchValue);

}