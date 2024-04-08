// let arr=[2,20,21,32];
// function printArray(arr){
//     for(let i=0; i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// let arr=[2,20,21,32];
//  function printPretty(elem){
//     console.log(':',elem);
//  }
//  function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//         printPretty(arr[i]);
//     }
//     arr.forEach(printPretty);
//  }
//  printArray(arr);
function printPreety(elem){
    console.log(':',elem);
}
setTimeout(printPreety,1000);