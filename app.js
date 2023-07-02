const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const contactsRouter = require('./routes/api/contacts');

const contacts = require('./contacts');

const app = express();

app.listen(3001, console.log('Server listening on port 3001'));

app.use((res, req, next) => {
  console.log('First middleware');
  next();
});
app.get('/contacts', (req, res) => {
  res.json(contacts);
  console.log('hi test 1');
  console.log(req.url);
  console.log(req.method);
});

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
