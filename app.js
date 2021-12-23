const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
// Watching server
app.listen(3000);

// ---------------- center admin routes -------------
const admin = require('./routes/adminG/admin.route');
const cAdmin = require('./routes/adminG/cAdmin.route');

// ---------------- center admin routes -------------

const centeradmin = require('./routes/centeradmin/Login_Route');
const crudcenteradmin = require('./routes/centeradmin/crudcenteradmin.Route');


// ****** admin ********
app.use('/api/admin',admin);
app.use('/api/cAdmin',cAdmin);

// ****** center admin ********
app.use('/api/centeradmin',centeradmin);
app.use('/api/centeradmin',crudcenteradmin);
