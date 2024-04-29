// const express = require('express');
// const fs =require("fs");
// const app =express()
// //const fs
// app.get('/api/products',(req, res)=>{
//     const data = fs.readFileSync('./data.json', "utf8");
//     const obj = JSON.parse(data);
//     res.send("Hello")
// });
// app.listen(1400);
 const express = require('express');
// const fs = require('fs');   #sync
const fsPromises = require('fs/promises');  // #async
const app = express();
const port = 1400;

app.use(express.json())

app.get('/', (req, res) => {
    // console.log(req);
    res.send('Hello World, This is / Page')
})

app.get('/api/products', async(req, res) => {
    // console.log(req);
    // const data = fs.readFileSync("./data.json", "utf8");   //sync
    const data = await fs.readFile("./data.json", "utf8");
    const dataObj = JSON.parse(data).products;
    res.send({
        status: "Success",
        result : dataObj.length,
        data: {
            products:dataObj}
    })
})

app.get('/products', (req, res) => {
    res.send('Hello World, This is Home Page GET')
})
app.post('/api/products', async(req, res) => {
    const data = req.body
    console.log(req.body);
    //data.id = data.product.length + 1;
    //res.send('Hello World, This is Home Page POST')
    const db = await fsPromises.readFile("./data1.json","utf8");
    const arr = JSON.parse(db);
    const len = arr.length;
    if(len==0){
        const newProduct =data;
newProduct.id=1;
arr.push(newProduct);
console.log(arr);
fsPromises.writeFile("./data1.json", JSON.stringify(arr));
    }
    else{ 
const newProduct=data;
newProduct.id=(arr[len-1].id)+1;
arr.push(newProduct);
fsPromises.writeFile("./data1.json", JSON.stringify(arr));
    }
    res.send('work in progress');
});
app.put('/products', (req, res) => {
    res.send('Hello World, This is Home Page PUT')
})
app.delete('/products', (req, res) => {
    res.send('Hello World, This is Home Page DELETE')
})

app.listen(port,()=>{
    console.log( `Server is running at http://localhost:${port}`)
})