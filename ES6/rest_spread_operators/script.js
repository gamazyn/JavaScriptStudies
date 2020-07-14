// rest operator, spread operator ...

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
	return multiply(...rest);
};
// console.log(sum(5, 5, 5, 2, 3));

// spread em ação

const str = 'O pai ta on';
const arr = [1, 2, 3, 5, 7, 11];

function logArgs(...args) {
	console.log(args);
}

const arr2 = [...arr, 13, 17, 19];

// logArgs(...str);
// logArgs(...arr);
// logArgs(arr2);

// spread em objs literais e iteraveis

const obj = {
	test: 123,
};

const obj2 = {
	...obj,
	// test: 484,
	test2: 'hello there!',
};

const objMerge1 = {
	frase: 'o pai ',
};

const objMerge2 = {
	frase: 'ta on!',
};

const objMerged = {
	...objMerge1,
	...objMerge2,
};

// console.log(objMerged);

// Shallow Clone

const objeto = {
	prop1: 'ok!',
	subObjeto: {
		prop1: 'ok!',
	},
};

const objetoClone = { ...objeto, subObjeto: { ...objeto.subObjeto } };

objetoClone.subObjeto.prop1 = 'ok ok!';
console.log(objetoClone);
