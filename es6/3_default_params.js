/*

	Параметры по умолчанию
	- важен  порядок, раньше не было возможности так задавать параметры.
	- можно задавать из переменных, даже из функций (можно основываться на других переменных, например - getDefault(a) )
	
*/

const defaultB = 10;
const getDefault = c => c * 2;

function compute(a, b = defaultB, c = getDefault(a)) {
	return a + b + c;
}

console.log(compute(100)); //310