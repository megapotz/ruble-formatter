exports.toRubles = function(num) {
	let num_str = [
			['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
			['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
			['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
		];
	
	let units = [
			['рубль', 'рубля', 'рублей'],
			['тысяча', 'тысячи', 'тысяч'],
			['миллион', 'миллиона', 'миллионов'],
		];
	
	function number_parser(num_arr, razr) {
		let str = '';

		num_arr = num_arr.reverse();
		let ones = +num_arr.shift();
		let tens = +num_arr.shift();
		let hundreds = +num_arr.shift();
		
		if (hundreds) {
			str = num_str[2][hundreds] + ' ';
		}

		if (tens == 1) {
			str += num_str[0][10 + ones] + ' ';
		} else {
			str += num_str[1][tens] + ' ' + num_str[0][ones] + ' ';
		}

		if (tens != 1) {
			if (ones == 1) {
				str += units[razr][0] + ' ';
			} else if (ones >= 2 && ones <= 4) {
				str += units[razr][1] + ' ';
			} else {
				str += units[razr][2] + ' ';
			}
		} else {
			str += units[razr][2] + ' ';
		}
		
		if (razr == 1) {
			str = str.replace('один ', 'одна ');
			str = str.replace('два ', 'две ');
		}

		return str;
	}

	num = ('' + parseInt(num)).split('');

	let str = '';
	let digit = 0;

	do {
		str = number_parser(num.splice(-3), digit++) + str;
	} while (num.length > 0);
	
	return str.replace('  ', ' ');
}