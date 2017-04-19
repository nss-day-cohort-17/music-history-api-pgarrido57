'use strict'

const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// <Include the router index file>
let routes = require('./routes/');

// <Setup your routes middleware>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/', routes);

// <catch any undefined routes with a 404 middleware>
app.use( (req, res, next) => {
	let err = new Error ('Not Found');
	err.status = 404;
	next(err);
});

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
app.use( (req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});

module.exports = app;
