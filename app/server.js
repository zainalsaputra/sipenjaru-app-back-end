const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const routes = require('./routes/index');

app.use(routes);

app.use((req, res, next) => {
  res.redirect('/not-found')
})


// app.use((req, res) => {
//   res.send({
//     status: 'Success',
//     data: 'Hello, welcome to sipenjaru API',
//   });
// });

const { PORT } = process.env || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
