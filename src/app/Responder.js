const sendSuccesData = (res, data) => {
	const object = {
		success: true,
		data: data,
	};
	res.send(object);
};

const sendFailureData = (res, message) => {
	const object = {
		success: false,
		message: message,
	};
	res.send(object);
};

module.exports = {sendFailureData, sendSuccesData};
