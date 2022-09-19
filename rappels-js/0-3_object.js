// Object destructuring - With default value
const user = {
	id: 1,
	name: "Aria",
	address: {
		city: "Winterfell",
	},
};

// const id = user.id;
// const firstname = user.name;
// const city = user.address.city;

const {
	id,
	name: firstname,
	address,
	address: { city },
} = user;
console.log(id);
console.log(firstname);
console.log(address);
console.log(city);

// Dynamic Object Key
// Pour acceder à id, on peut le faire de deux façons:
console.log(user.id);
console.log(user["id"]);
// C'est aussi possible en écriture: 
const key = "id";
const house = "house";
const secondUser = {
	[key]: 2,
	name: "Daenerys",
	[house]: "Targaryan",
};

// Spread Operator - Attention, ce dernier ce fait qu'une copie superficielle (shallow copy)
const thirdUser = {
	...user,
	address: { ...user.address },
};
console.log(thirdUser);

// Rest Operator
const log = (first, ...params) => console.log(params);
log(2, 4, true, "other"); // [4, true, "other"]
log("test"); // []

