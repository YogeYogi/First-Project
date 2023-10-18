const Express = require('express');
const Mongoose = require('mongoose');
const App = Express();
App.use(Express.json());

App.use('/index', require('./router/EmployeeRouter'));
Mongoose.connect('mongodb://localhost:27017/employees').then(() => {});
App.listen(2424, () => {
	console.log('DB Conected');
});
