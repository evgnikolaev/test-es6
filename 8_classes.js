class Person {
	type = 'human';

	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(this.name + ' говорит привет');
	}


}

const Max = new Person('Max');
// console.log(Max);
// Max.greet();
// console.log(Max.type);

//на уровне прототипов (внутри js это все равно устроено на прототипах)
// console.log(Max.__proto__ === Person.prototype);


/*  Наследование  */
class Programmer extends Person {
	constructor(name, job) {
		//вызываем конструктор родителя
		super(name);

		this._job = job;
	}

	//геттер
	get job() {
		return this._job.toUpperCase();
	}

	//сеттерь(здесь можно писать различные валидации)
	set job(job) {
		if (job.length < 2) {
			throw new Error('Vallidation failed');
		}
		this._job = job;
	}

	greet() {
		//вызываем метод родителя
		super.greet();
		console.log('rewritten');
	}
}


const frontend = new Programmer('Max', 'frontend');
// console.log(frontend);
// console.log(Object.keys(frontend));

// frontend.greet();


//геттеры и сеттеры
// console.log(frontend.job);
// frontend.job = '1';
// console.log(frontend.job);


/* Статические методы */
class Utils {
	static average(...args) {
		return args.reduce((acc, i) => acc += i, 0) / args.length;
	}
}

const res = Utils.average(1, 2, 3, 5, 8, 13);
// console.log(res);


