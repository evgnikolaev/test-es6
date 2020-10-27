/*
  -------   ИТЕРАТОРЫ   ------------
  Для массивов , для строк по умолчанию определен Symbol.iterator(уникальный) - возвращается ф-ия.
  Благодаря этому можем итеративно получать элементы строки или массива.
  новый цикл for..off,
*/
const array = [10, 20, 30];
const str = 'hello';


//для массивов , для строк по умолчанию определен Symbol.iterator(уникальный) - возвращается ф-ия.
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);


//вызвав ф-ию, вернется объект
const iter = array[Symbol.iterator]();
// const iter = str[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); //value: 30, done: false
console.log(iter.next()); //value: undefined, done: true - закончился


// новый цикл for..off - смотрит за Symbol.iterator, и мы можем обращаться к тем объектам для которого определен символ итератора - это зашито в языке
for (let item of array) {
	console.log(item);
}


/*

	Мы можем создавать свои итераторы

 */
const country = {
	values: ['ru', 'kz', 'ua', 'by'],
	//пишем свой итератор, определяем метод next(который вернет value, done)
	[Symbol.iterator]() {
		let i = 0;
		return {
			next: () => {
				const value = this.values[i];
				i++;
				return {
					done: i > this.values.length,
					value
				}
			}
		}
	}
};

for (let item of country) {
	console.log(item);
}


console.log('--generator--');

/*
-------   Генераторы   ------------
	ф-ия со звездочкой / при помощи next, задаем следующую итерацию
*/

function* gen(num = 4) {
	for (let i = 0; i < num; i++) {
		try {
			//при помощи yeald можно порционно выдавать значения
			yield i;
		} catch (e) {
			console.log('error', e);
		}
	}
}


const iter2 = gen(3);
//при помощи next, задаем следующую итерацию
console.log(iter2.next());
console.log(iter2.throw('MyError'));//выбрасываем ошибку
console.log(iter2.next());

// можно использовать цикл for..off
for (let i of gen(4)) {
	console.log(i);
}
