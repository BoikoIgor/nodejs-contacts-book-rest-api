const app = require('./app');

const mongoose = require('mongoose');
const DB_HOST = 'mongodb+srv://igorboiko:b89d6DntCMeCkH4Q@cluster.ta0xpkl.mongodb.net/db-contacts';
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });
