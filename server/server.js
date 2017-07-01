const express = require('express');
const appConfig = require('./appConfig');

const app = express();
const PORT = process.env.PORT || 3000;

appConfig(app);


app.route('/api')
.get((req, res) => {
  res.send('this is the root GET path');
})
.post((req, res) => {
  const { firstName, lastName, age } = req.body;
  console.log(firstName, lastName, age);

  // setTimeout to produce some latency
  // otherwise it looked like i was just taking data on client side and showing it xD
  setTimeout(() => {
    res.json({ firstName, lastName, age });
  }, 1000);
});


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
