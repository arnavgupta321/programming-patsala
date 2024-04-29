const b = new Buffer.from('abacd');
console.log(b.toString());
b.write('other');
console.log(b.toString());

