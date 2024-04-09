const express = require('express');
const app = express();
const port = 3000;
const authRouter = require('./controllers/authHandler');
const CreateDBSchemas = require('./models/DBSchemas');
const referralRouter = require('./controllers/referralController')

app.use(authRouter);
app.use(referralRouter);
CreateDBSchemas();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
