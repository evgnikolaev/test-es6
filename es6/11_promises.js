/*
Промисы - удобная конструкция для работы с асинхронным кодом.
Идея - оборачивать асинхронный код, убирая уровень вложенности.

new Promise((resolve, reject)=>{})
			resolve - ф-ия при удаче
 			reject 	- ф-ия при неудаче
*/

const promice = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');

	}, 500);
});

/*
 promice - объект, у него 3 метода
.then() - будет вызван тогда, когда закончится ассинхронный код resolve
.catch() - когда ошибка reject
.finally() - в любом случае какгда прмис завершится
 */

//promice.then(data => console.log(data)); // выведется 'success'


/* возвращаем промис */
const delay = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Done ${ms}`)
	}, ms);
});


// delay(1000)
// 	.then(data => delay(500)) //возвращаем промис внутри промиса
// 	.then(data => console.log(data)); //выведется Done 500 так как выше мы вызвали delay(500)        ????????????????
//
//


const delay2 = ms => new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(`reject  ${ms}`)
	}, ms);
});

// delay2(1000)
// 	.then(data => delay2(500))
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))
// 	.finally(() => console.log('finally'));


/*
есть конструкция async await для удобной работы с промисами
в этом случае не нужно погружаться в внутренние колбеки, работаем на плоском уровне
*/
async function asyncDelay() {
	try {
		// const data = await delay(2000);
		// await применяем промис
		const data = await delay2(2000);
		//равносильна записи
		//delay2(1000).then(data => data)

		console.log(data);
	} catch (e) {
		console.log('error', e);
	}
}

// asyncDelay();


//Работа с группой промисов
// .all() - возвращает тот же промис, ждет пока завершаться все промисы, и выдаст массив результатов всех промисов
// .race() - ждет пока выполнится первый (самый быстрый) промис, порой это удобно при загрузке данных из сервера
Promise.all([
	delay(1000),
	delay(500),
	delay(2000)
]).then(data => console.log(data));

Promise.race([
	delay(1000),
	delay(500),
	delay(2000)
]).then(data => console.log(data));




















