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

<<<<<<< HEAD
const promo = require('./routes/centeradmin/promo.route');


app.use('/api/admin',admin);
app.use('/api/cAdmin',cAdmin);
app.use('/api/promo',promo);
=======
// ---------------- center admin routes -------------

const centeradmin = require('./routes/centeradmin/Login_Route');
const crudcenteradmin = require('./routes/centeradmin/crudcenteradmin.Route');


// ****** admin ********
app.use('/api/admin',admin);
app.use('/api/cAdmin',cAdmin);

// ****** center admin ********
app.use('/api/centeradmin',centeradmin);
app.use('/api/centeradmin',crudcenteradmin);
>>>>>>> d336aa2d1e9075e375f45f35e36ee210bf146c9f
