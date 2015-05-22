var number = new Array();
for (i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		number.push(' fizzbuzz ');
	}
	else if (i % 3 == 0) {
		number.push(' fizz ');
	}
	else if (i % 5 == 0) {
		number.push(' buzz ');
	}
	else
		number.push(' ' + i + ' ');
};

document.write(number + ' .');