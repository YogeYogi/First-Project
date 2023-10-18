const Express = require('express');
const Router = Express.Router();
const {validationResult} = require('express-validator');
const Validator = require('../validation/EmployeeValidator');
const Controller = require('../controller/EmployeeController');
//const Responder = require('../app/Responder');

Router.post('/add', Validator.EmployeeValidate, async (request, response) => {
	const Error = validationResult(request, response);
	if (!Error.isEmpty()) {
		return response.send(Error);
	}

	const Result = await Controller.Add(request, response);
	return Result;
});

Router.get('/get', async (request, response) => {
	const Result = await Controller.Retrive(request, response);
	return Result;
});

Router.post(
	'/update',
	Validator.EmployeeValidate,
	async (request, response) => {
		const result = await Controller.Update(request, response);

		return result;
	},
);

Router.delete('/delete', Controller.Delete);

module.exports = Router;
