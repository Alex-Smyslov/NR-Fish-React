require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const products = require('./static/products.json');


app.use(
	cors({
		origin: '*',
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})

app.get('/catalog', async (req, res) => {

	await res.json(products)
})

app.get('/api/images', async (req, res) => {

	await res.json(
		{
			id: '1',
			title: 'Product 1',
			description: 'Product 1Product 1Product 1Product 1'
		}
	)
})