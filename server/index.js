require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');


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

const products = [
	{
		id: '1',
		title: 'Product 1',
		description: 'Description 1'
	},
	{
		id: '2',
		title: 'Product 2',
		description: 'Description 2'
	},
	{
		id: '3',
		title: 'Product 3',
		description: 'Description 3'
	},
	{
		id: '4',
		title: 'Product 4',
		description: 'Description 4'
	},
	{
		id: '5',
		title: 'Product 5',
		description: 'Description 5'
	},
	{
		id: '6',
		title: 'Product 6',
		description: 'Description 6'
	},
	{
		id: '7',
		title: 'Product 7',
		description: 'Description 7'
	},
	{
		id: '8',
		title: 'Product 8',
		description: 'Description 8'
	},
	{
		id: '9',
		title: 'Product 9',
		description: 'Description 9'
	}
]


app.get('/api/products', async (req, res) => {

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