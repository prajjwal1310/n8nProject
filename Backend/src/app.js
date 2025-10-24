const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');

app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/upload',homeRoutes);

module.exports = app;