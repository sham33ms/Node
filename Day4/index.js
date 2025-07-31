const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); 

app.use('/users', userRoutes); 
app.listen(3000, async () => {
  
    await sequelize.authenticate();
    console.log(' DB connected.');
    console.log(' Server running on http://localhost:3000' );
  
  
});
