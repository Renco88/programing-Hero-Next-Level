// const startTime = performance.now();
// for (let i = 0; i < 1000000; i++) {
//     console.log(i);
// }   
// const endTime = performance.now();
// console.log(`Execution time: ${endTime - startTime} milliseconds`);


const firstArr = [];
const secondArr = [];

for (let i = 0; i < 600000; i++) {
    if (i< 300000) {
    firstArr.push(i);
}
secondArr.push(i);
}
console.log(firstArr.length);
console.log(secondArr.length);

console.time('map1');
const firstUserList = firstArr.map(( number ) => (  {userId: number} )  );
console.timeEnd('map1');

console.time('map2');
const secondUserList = secondArr.map(( number ) => (  {userId: number} )  );
console.timeEnd('map2');