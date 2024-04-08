// console.log('GEC Start');


// function printPreety(){
//     console.log('prettyStart');
//     let ans=2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }
// setTimeout(printPreety,1000);
// console.log('GEC End');

// console.log('start');
// const req=fetch("");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log('end');
// console.log('Start')

// const req=fetch('https://dummyjson.com/products/1')
// const res =req.then(res=>res.json())
// res.then((data) =>console.log(data));
// // .then(res => res.json())
// // .then(json => console.log(json))

// console.log('End')
console.log('Start')

const req=fetch('https://dummyjson.com/products/1')
.then(res=>res.json())
.then((data) =>console.log(data));
// const res =req
// res
// .then(res => res.json())
// .then(json => console.log(json))

console.log('End')
            