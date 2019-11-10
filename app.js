/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.post('/register', (req, res) => {
  let netId,
      password,
      firstName,
      lastName,
      phoneNumber,
      reqBody = _.get(req, 'body');
    
  // TODO: validate request
  console.log(req.body);
  
  if (!reqBody) { return res.status(400).send('No body in request'); };

  firstName = _.get(reqBody, 'firstName');
  lastName = _.get(reqBody, 'lastName');
  phoneNumber = _.get(reqBody, 'phoneNumber');
  netId = _.get(reqBody, 'netId');
  password = _.get(reqBody, 'password');

  // TODO: hash password and store

  // TODO: Write request to database
  // conn.createUser()

  res.status(200).send('OK');
});

app.post('/login', (req, res) => {
  let netId,
      password;

  netId = _.get(reqBody, 'netId');
  password = _.get(reqBody, 'password');

  // TODO: retrieve password hash and confirm login

  // TODO: test
  res.status(200).send('OK');

  if (hash(password) === db_password) {
    // TODO: success response. Send user information
    res.status(200).send('OK');
  }
});

app.post('/creategame', (req, res) => {
  
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
