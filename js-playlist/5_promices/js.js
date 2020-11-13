/*
Эмулируем запрос
Такой подход плох тем что мы получаем большую вложенность колбеков.
Такой код плохо поддерживать.
*/

/*
console.log('Запросили данные ...');

//как будто работает сервер
setTimeout(() => {
	console.log('Готовим данные...');

	// как будто получили с backend данные
	const backendData = {
		server: 'aws',
		port: 2000,
	};

	//как будто отдаем обратно клиенту
	setTimeout(() => {
		backendData.modified = true;
		console.log('Данные получены...', backendData);
	}, 2000);

}, 2000);
*/


/*!!!!!!
Промисы - удобная конструкция для работы с асинхронным кодом.
Идея - оборачивать асинхронный код, убирая уровень вложенности.

new Promise((resolve, reject)=>{})
			resolve - ф-ия при удаче, и когда закончена асинхронная операция
 			reject 	- ф-ия при неудаче, и когда закончена асинхронная операция
*/
console.log('Запросили данные ...');

const p = new Promise(function (resolve, reject) {
	//здесь пишем асинхронный код

	setTimeout(() => {
		console.log('Готовим данные...');

		// как будто получили с backend данные
		const backendData = {
			server: 'aws',
			port: 2000,
		};
		resolve(backendData); // говорим что завершилось ассинхронное выполнение
	}, 2000);
});


// вызываем методы объекта промиса
/*p.then(data => {
	//здесь можно возвращать промис, код становится еще более читабельнее, пример ниже!!!
	const p2 = new Promise((resolve, reject) => {
		//как будто отдаем обратно клиенту
		setTimeout(() => {
			data.modified = true;
			resolve(data);
		}, 2000);
	});

	p2.then(clientData => {
		console.log('Данные получены...', clientData);
	});
});*/

//возвращаем промис, также можно возвращать и данные, удобнос смортеть асинхронность
p.then(data => {
	return new Promise((resolve, reject) => {
		//как будто отдаем обратно клиенту
		setTimeout(() => {
			data.modified = true;
			resolve(data);
			// reject(data); // - при неудаче
		}, 2000);
	});
}).then(clientData => {
	console.log('Данные получены...', clientData);
	clientData.fromPromise = true;
	return clientData;
}).then(modifiedDara => {
	console.log('Модифицированные данные ...', modifiedDara);
}).catch(err => {
	console.error('catch вызывается при ошибке')
}).finally(() => {
	console.log('finally в любом случае вызывается')
});


//еще примеры
const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};
// sleep(2000).then(() => console.log('after 2sec'));
// sleep(3000).then(() => console.log('after 3sec'));


//Работа с группой промисов
// .all(['массив промисов']) - возвращает тот же промис, ждет пока завершаться все промисы, и выдаст массив результатов всех промисов
//			например удобно когда грузим данные с сервера и собираем данные из разных endpoint
// .race(['массив промисов']) - ждет пока выполнится первый (самый быстрый) промис, порой это удобно при загрузке данных из сервера
Promise.all([sleep(2000), sleep(5000)]).then(() => {
	console.log('all promices');
});