const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); 

app.use('/', userRoutes); 
app.listen(3000, async () => {
  
    await sequelize.authenticate();
    console.log(' DB connected.');
    console.log(' Server running on http://localhost:3000' );
  
  
});
// sequelize.sync({ alter: true })
//   .then(() => console.log('Synced'))
//   .catch(err => console.error(err));
