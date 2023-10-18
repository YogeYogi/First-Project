const {check} = require('express-validator');
const Regex = /[ A-Za-z]/g;
const RegexOne = /^\d{6}$/g;

const EmployeeValidate = [
	check('name', 'Input should not be empty').trim().notEmpty(),
	check('name', 'Input value should be string').trim().matches(Regex),
	check('age', 'Input value should be Number').trim().isNumeric(),
	check('des', 'Designation should be String').trim().matches(Regex),
	check('empid', 'Employee id should be an String').trim().matches(Regex),
	check('location.city', 'Input should be string').matches(Regex),
	check('location.street', 'Input value should be string')
		.trim()
		.matches(Regex),
	check('location.pincode', 'Input value should be Number')
		.trim()
		.matches(RegexOne),
];

module.exports = {EmployeeValidate};
