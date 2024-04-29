const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('data.json');
const cardTemplate = fs.readFileSync('./template/card.html', 'utf-8');
const htmlTemplate = fs.readFileSync('./template/page.html', 'utf-8');
const dataObject = JSON.parse(data);

let allcard = '';
for(let i=0; i<dataObject.products.length; i++){
  const card1 = cardTemplate.replace('Card Title', dataObject.products[i].title).replace('Card Description', dataObject.products[i].description);
  console.log(dataObject.products[i].title);
  allcard += (card1)
  // console.log(dataObject[i].description);
}

const page = htmlTemplate.replace('<h1>Hello World from template variable</h1><h2>Node.js from template variable</h2>', allcard)

// createServer in node
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(page);
  console.log(req.url);
  // console.log(Object.keys(req));
});
server.listen(3000, () => {
    console.log('Server is running...'); 
    }
);