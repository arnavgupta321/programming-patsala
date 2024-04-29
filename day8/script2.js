const fs = require("fs");
 const http = require("http");
 const url = require('url');

 const data = fs.readFileSync("./data.json","utf8");
 const dataObj = JSON.parse(data).products;
const inputElement = `
<form action ='/product'>
<input type = "type" name="productName">
<button type = "submit"> Search</button>
</form>
`
 const cardTemplate = `
<div style = 'text-align:center; background-color:pink' class ='product-card'>
    <h2>TITLE</h2>
    <img src="$img-src$" alt='product-image' />
    <h5>PRICE</h5>
    <h4>description</h4>
    <a href = "$product_links$">More info</a>
</div>
`;
let result = [];
for(let i=0; i<dataObj.length; i++){
    let temp = cardTemplate;
    temp = temp.replace('TITLE',dataObj[i].title);
    temp = temp.replace('$img-src$',dataObj[i].images[0]);
    temp = temp.replace('PRICE',dataObj[i].price);
    temp = temp.replace('description',dataObj[i].description);
    temp = temp.replace('$product_links$', `/product?id=$(i)`);
    result.push(temp);
}

result = result.join(' ');

const server = http.createServer((req, res)=>{
res.writeHead(200, {
  'content-type': 'text/html',
});

  const path=url.parse(req.url,true);
  const pathname = path.pathname;
  const q = path.query;
  if(pathname=='/home'){
    res.end(inputElement+result);
  }
  else if(pathname=="/about"){
    res.end('I am arnav');
  }
  else if(pathname=='/product'){
      const pName = q.productName;
    
      if(pName){
        //res.end(pName);
      const searchNameResult =dataObj.filter((elem)=>{
        if(elem.title.includes(pName)){
            return true;
        }
        else{
            false;
        }
      })
      res.end(JSON.stringify(searchNameResult));
      }
      else{
        res.end('<h3>Error...</h3>')
      }
  }
  else{
    res.end('Oops..... Route does not exists')
  }
 });
server.listen(1400);