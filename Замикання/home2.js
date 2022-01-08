/*
 * Написати функцію, яка отримуватиме в аргумент
 * масив votes та повертати масив унікальних значень
 * відсортованих за кількістю їх входження до масиву votes
 * Результат повинен вийти таким [react, vue, angular]
 * */

const votes = [
  "angular",
  "react",
  "vue",
  "react",
  "angular",
  "react",
  "vue",
  "react",
  "vue",
];


function getVotes(list) {
  let result = {}
  for(let framework of list){
    if(result.hasOwnProperty(framework)){
      result[framework] += 1;
    }else {
      result[framework] = 1;
    }
  }
  return Object.keys(result).sort((a, b) => result[b] - result[a]);
}

console.log(getVotes(votes)); // [react, vue, angular]
