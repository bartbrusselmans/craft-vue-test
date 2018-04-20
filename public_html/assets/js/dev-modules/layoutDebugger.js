function layoutDebugger() {
	[].forEach.call($$("*"), (a) => {
		a.style.outline = `1px solid # ${(~~(Math.random() * (1 << 24))).toString(16)}`
	});
	return 'Start debugging 🕵';
}

export default layoutDebugger;
