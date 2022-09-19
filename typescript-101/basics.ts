type User = {
	name: string;
	id: number;
	connected: boolean;
};

const user = {
	name: "Hayes",
	id: 0,
	connected: false,
};

const users: User[] = [];

// users.push("test") // Erreur car ne correspond pas au type User

const isActive = (user: User): boolean => {
	return user.connected;
};

// Union type
const grades: (number | null)[] = [null, 15, 12, 16];

// Turple
const shoppingList: [string, number][] = [["pommes", 5]];

// Enums
enum Methods {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

const sayHello = (name?: string): void => {
	// Template string - String interpolation
	if (name) console.log(`Hello ${name}`);
	else console.log("Hello stranger");
};

const sayHelloWithDefaultValue = (name = "stranger"): void => {
	console.log(`Hello ${name}`);
};
