const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
// Watching server
app.listen(3000);

const admin = require('./routes/adminG/admin.route');
const cAdmin = require('./routes/adminG/cAdmin.route');

app.use('/api/admin',admin);
app.use('/api/cAdmin',cAdmin);
