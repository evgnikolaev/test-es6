/*
	основные структуры данных - массивы и объекты.
	map, set - более продвинутая репрезентация объектов и массивов.
	new Map( передаем формат entries(двумерный массив, ключ значение) [ ['a',1] , [''b',2] ])
	.get('a') - получаем доступ к ключу
	.set('b',2) - добавить, значениями может быть что угодно
	.clear() - полностью очистить map
	.has() - присутствует ли ключ
	.delete('b') - удалить ключ
	.size - длина


	.keys() - итератор, ключи / можем вызывать for..off
	.entries() -просто формат
	.values() - итратор, значения / можем вызывать for..off
*/

const map = new Map([['a', 1]]);
//map.clear();
map.set('b', 2).set(NaN, 'Number');
console.log(map);
console.log(map.get(NaN));

console.log(map.has('b'));
map.delete('b');
console.log(map);

console.log(map.size);


console.log(map.keys());
console.log(map.entries());
console.log(map.values());


/*
	Set - похож на массив/
	В нем нет дубликатов,	и есть свои методы
	.size - длина
	.add(21) - добавить
	.delete(5) - удалить
	.clear() -очистить

	и для совместимости с map есть(просто для одинаковости с map):
	.keys() - итератор, ключи / можем вызывать for..off (здесь только значения, ключей у него нет)
	.entries() -просто формат
	.values() - итратор, значения / можем вызывать for..off
*/

const set = new Set([1, 1, 2, 3, 4, 5, 8, 13, 5, 8, 13]);
console.log(set);
console.log(set.size);
console.log(set.add(21));
console.log(set.delete(5));
console.log(set);
