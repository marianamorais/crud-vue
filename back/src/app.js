/**
 * file: app.js
 * file: file responsible for connecting to the 'server.js' file
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Api routes (Employee)
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api', employeeRoute);

module.exports = app;