/* eslint-disable no-undef */
// import express from 'express';
// import cors from 'cors';
// import products from './static/products.json';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const products = require('./static/products.json');
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/catalog', async (req, res) => {
  await res.json(products);
});