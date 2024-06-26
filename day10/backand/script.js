const express = require('express');
const app = express();
const port = 3000;

const productRouter = require('../AmazonBackend/routes/productRoutes.js');

app.use(express.json());
app.use('/products', productRouter);

// const testDB = require('../AmazonBackend/models/productsModel.js');
// console.log(dburl)


// 1st method to use DB
// const mongoose = require('mongoose');
// mongoose.connect(dburl)
// .then(() => console.log('Connected to database'));

// const Cat = mongoose.model('CollectionName', { name: String });

// const kitty = new Cat({ name: 'Nitish Jha1' });
// kitty.save().then(() => console.log('data saved in database'));


// 2nd method
// const testDB = require('../AmazonBackend/models/productsModel.js');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);