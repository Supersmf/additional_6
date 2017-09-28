module.exports = function zeros(expression) {
	let numbers = expression.split('*');
	let mul = 1;
	let count = 0;
	for (var i = 0; i < numbers.length; i++) {
		let res = 1;
		let temp = parseInt(numbers[i], 10);
		if(numbers[i].match(/!!/)){
			let j = 2;
			if(temp%2) j = 1;
			while(j <= temp){
				res = multiply(String(res), String(j));
				j+=2;
			}
		}else {
			for(let j = 1; j <= temp; j++){
				res = multiply(String(res), String(j))
			}
		}
		mul = multiply(String(mul), String(res));
	}
	for (var i = mul.length-1; i > 0;  i--) {
		if(mul[i] === '0'){
			count++;
		} else break;		
	}
	return count;

	/*method from the task Product (multiplies large numbers)*/
	function multiply(first, second) {
 	 	let one = first.split('');
		let two = second.split('');
		let sum = Array(one.length + two.length).fill(0);
		for(let i = one.length-1; i > -1; i--){
			for(let j = two.length-1; j > -1; j--){
				let temp = (one[i] * two[j]) + sum[i+j+1];
				if(temp >= 10){
					sum[i+j+1] = temp%10;
					sum[i+j] += Math.floor(temp/10);
				}else sum[i+j+1] = temp;
			}
		}
		while(sum[0] === 0)sum.shift();
		return sum.join('');
	}
}
