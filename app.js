'use strict';

// [START gae_node_request_example]
const express = require('express'),
      app = express(),
      interface = require('./server');

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();

    interface.conn.query('SELECT * FROM user', function (err, results, fields) {
      if (err) throw err;
      console.log('The solution is: ', results[0].solution);
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');

  interface.connect();
});
// [END gae_node_request_example]

module.exports = app;
