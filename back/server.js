/**
 * file: server.js
 * description: file responsible for all the configuration and execution of the Back-End(Employee)
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('The aplication its been executed at:', port);
});