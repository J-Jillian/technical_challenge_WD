const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();

app.get('/phones', async (request, response) => {

});

app.listen(process.env.PORT || 3000, () => console.log(`App is listening on PORT http://localhost:3000`));


