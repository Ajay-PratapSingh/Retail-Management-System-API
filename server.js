const express=require('express');
const bodyParser=require('body-parser');

const customerRoutes=require('./routes/customers');
const productRoutes=require('./routes/products');
const orderRoutes=require('./routes/orders');
const authRoutes=require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1/auth',authRoutes);

app.use('/api/v1/customers',customerRoutes);

app.use('/api/v1/products',productRoutes);

app.use('/api/v1/orders',orderRoutes);


app.use((req,res)=>{
    res.status(404).send("Page Not Found")
});

app.listen(3000);

