function log() {
	function getErrorObject() {
		try {
			throw Error('');
		} catch (err) {
			return err;
		}
	}

	const err = getErrorObject();
	if (typeof err.stack !== 'undefined') {
		const callerLine = err.stack.split('\n')[3];
		const index = callerLine.indexOf('at ');
		const clean = callerLine.slice(index + 2, callerLine.length);
		console.log(arguments, clean);
	} else {
		console.log(arguments);
	}
}

export default log;
