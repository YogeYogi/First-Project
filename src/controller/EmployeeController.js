const UserModel = require('../schema/SchemaModel');
const Add = async (request, response) => {
	const User = new UserModel(request?.body);
	try {
		await User?.save();
		return response?.send(User);
	} catch (error) {
		return response?.send(error);
	}
};

const Retrive = async (request, response) => {
	const Result = await UserModel?.find();
	try {
		return response?.send(Result);
	} catch (error) {
		return error;
	}
};

const Update = async (request, response) => {
	try {
		const changes = request?.body?._id;

		const existingStudent = await UserModel?.findOne({_id: changes});

		if (!existingStudent) {
			return response?.status(404)?.send('Student not found');
		}

		if (request?.body?.name) {
			existingStudent.name = request?.body?.name;
			existingStudent?.markModified('name');
		}

		if (request?.body?.age) {
			existingStudent.age = request?.body?.age;
			existingStudent?.markModified('age');
		}

		if (request?.body?.city) {
			if (!existingStudent?.location) {
				existingStudent.location = {};
			}
			existingStudent.location.city = request?.body?.city;
			existingStudent.markModified('location.city');
		}

		if (request?.body?.street) {
			if (!existingStudent?.location) {
				existingStudent.location = {};
			}
			existingStudent.location.street = request?.body?.street;
			existingStudent.markModified('location.street');
		}

		if (request?.body?.pincode) {
			if (!existingStudent?.location) {
				existingStudent.location = {};
			}
			existingStudent.location.pincode = request?.body?.pincode;
			existingStudent.markModified('location.pincode');
		}

		if (request?.body?.gender) {
			existingStudent.gender = request?.body?.gender;
			existingStudent.markModified('gender');
		}

		await existingStudent?.save();

		response?.send(existingStudent);
	} catch (error) {
		response?.send(error);
	}
};

const Delete = async (request, response) => {
	const deleted = request?.body?._id;

	try {
		const deletedStudent = await UserModel?.deleteOne({_id: deleted});

		response?.send(deletedStudent);
	} catch (error) {
		response?.send(error);
	}
};

module.exports = {
	Add,
	Retrive,
	Update,
	Delete,
};
