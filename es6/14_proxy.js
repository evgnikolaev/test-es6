/*
Proxy - по сути это класс, позволяющий добавлять определенные ловушки на объекты

const formProxy = new Proxy(
						form, - объект , за которым следим
						validator - объект, ловушек, который характерен для первого объекта
					);

отличие от геттеров сеттеров, мы можем применять любые объекты, при этом набор правил оастается предыдущим.

Proxy мы можем ставаить для объектов, для классов, для ф-ий.
При помощи Proxy можно обрабатывать большие данные.

*/

const validator = {
	get(target, prop) {
		return prop in target ? target[prop] : `Поля ${prop} в объекте нет`
	},

	set(target, prop, value) {
		if (value.length > 2) {
			Reflect.set(target, prop, value)
		} else {
			console.log('Длина болжна быть больше 2 символов. Сейчас' + value.length);
		}
	},
};


const form = {
	login: 'tester',
	password: '12345'
};

const formProxy = new Proxy(form, validator);
console.log(formProxy.password);
console.log(formProxy['userName']);


formProxy.password = '12';


// вызываем proxy для ф-ии
function log(message) {
	console.log('[log]:', message);
}

const proxy = new Proxy(log, {
	// будет вызываться именно этот метод, если мы вызовем ф-ию log
	// target - та ф-ия , которую мы хотим вызвать
	// thisArg 	- контекст
	// argArray - массив парамтеров
	apply(target, thisArg, argArray) {
		if (argArray.length === 1) {
			Reflect.apply(target, thisArg, argArray);
		} else {
			console.log('Количество аргументов не совпадает');
		}
	}
});

proxy('custom message');
proxy(); //валидация не пройдет, ф-ия не выполнится ??????????????????????








