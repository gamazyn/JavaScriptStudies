var arr = ['Huguinho', 'Zezinho', 'Luizinho', ['Donald']];

var huey = arr[0];
var dewey = arr[1];
var louie = arr[2];
var donald = arr[3][0];

var arr2 = [
	{
		name: 'Papaya',
		type: 'fruit',
		color: 'orange',
		tasteRank: 7,
	},
];

var obj = {
	name: 'Thiago',
	props: {
		age: 23,
		favoriteLanguages: ['English', 'Deutsche', 'Italiani'],
	},
};

var age = obj.props.age;
//Destructuring Assignment

var [huey2, dewey2, louie2, [donald2]] = ['Huguinho', 'Zezinho', 'Luizinho', ['Donald']];

var {
	props: {
		age: age2,
		favoriteLanguages: [lang1, lang2, lang3],
	},
} = obj;

var [{ name: fruitName }] = arr2;

// console.log(fruitName);

// Destructuring on functions

function sum([a, b] = [0, 0]) {
	return a + b;
}

console.log(sum());

console.log(sum([5, 5]));
