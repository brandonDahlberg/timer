const arg = process.argv.slice(2);
const beep = process.stdout.write('\007');

const timer1 = function () {
	if (arg) {
		for (let x = 0; x <= arg.length; x++) {
			delay = arg[x];
			setTimeout(() => {
				process.stdout.write('\007');
			}, arg[x]);
		}
		delay = delay + arg;
	} else if (typeof arg !== 'number') {
		process.stdout.write('');
	} else if (arg < 0) {
		process.stdout.write('');
	} else if (!arg) {
		process.stdout.write('');
	}
};

timer1();
