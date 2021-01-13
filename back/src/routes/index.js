/**
 * file: routes/index.js
 * description: file responsible for the API call in the application on the Back-End side
 */

 const express = require('express');

 const router = express.Router();

 router.get('/api', (req, res) => {
   res.status(200).send({
     success: 'true',
     message: 'Lets learn!',
     version: '1.0.0'
   });
 });

 module.exports = router;