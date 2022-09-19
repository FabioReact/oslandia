const avengers = [
	{ id: 1, name: "Iron Man" },
	{ id: 2, name: "Hulk" },
	{ id: 3, name: "Black Widow" },
	{ id: 4, name: "Captain America" },
	{ id: 5, name: "Hawkeye" },
];

const getUsers = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(avengers);
	}, 500);
});

console.time("test");
console.time("test2");
// Version avec .then
const getUsersWithThen = () => {
	getUsers
		.then((users) => {
			console.log(users);
			console.timeEnd("test");
		})
		.catch((error) => {
			console.error(error);
		});
	console.timeEnd("test2");
};

getUsersWithThen();

// Version avec async/await
const getUsersWithAsyncAwait = async () => {
	try {
		const users = await getUsers;
		console.log(users);
		console.timeEnd("test");
		console.timeEnd("test2");
	} catch (err) {
		console.error(error);
	}
};

getUsersWithAsyncAwait();
console.log("Not blocked");
