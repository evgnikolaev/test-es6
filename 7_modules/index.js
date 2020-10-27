/*
import {дестракторинг} from откуда
для того чтобы запускать нужно, например использовать webpack, который будет соединять модули

Logger - можно задать любое название, когда экспортируем по дефолту.
*/

import Logger, {color, compute} from './module.js';

console.log(color);
compute(1, 2);

console.log(Logger.log());



// другой способ записи, импортируем все в переменную
import * as MyModule from './module.js';

console.log(MyModule);