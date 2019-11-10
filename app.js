const _ = require('lodash'),
  express = require('express'),
  bodyParser = require('body-parser');

const app = express();

// Used for parsing incoming request as JSON
app.use(bodyParser.json());

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
      password,
      reqBody = _.get(req, 'body');
    
  // TODO: validate request
  console.log(req.body);

  netId = _.get(reqBody, 'netId');
  password = _.get(reqBody, 'password');

  console.log(req.body);
  // TODO: retrieve password hash and confirm login

  // TODO: test
  res.status(200).send('OK');

  if (hash(password) === db_password) {
    // TODO: success response. Send user information
    res.status(200).send('OK');
  } else {
    res.status(404).send('Invalid password');
  }
});

app.post('/creategame', (req, res) => {
  let startTime,
      duration,
      sport;
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
