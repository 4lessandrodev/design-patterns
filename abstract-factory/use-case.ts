/** Interfaces */
interface IFruit { 
	price: number;
	quantity: number;
	color: string;
}

interface Fruit extends IFruit {
	getName():string
}

interface ICreator {

	createBanana(props: IFruit): Fruit;
	createApple(props: IFruit): Fruit;

}

/** Implementation */
class Apple implements Fruit {
	constructor(
		public price: number,
		public quantity: number,
		public color: string,
	) { }
	
	getName(): string {
		return 'This fruit is an Apple';
	}
}

class Banana implements Fruit {
	constructor(
		public price: number,
		public quantity: number,
		public color: string,
	) { }
	
	getName(): string {
		return 'This fruit is a Banana';
	}
}

export class Creator implements ICreator {
	createBanana({ price, color, quantity }: IFruit): Fruit {
		return new Banana(price, quantity, color);
	}
	createApple({ price, color, quantity }: IFruit): Fruit {
		return new Apple(price, quantity, color)
	}
}

/** Client code. How to use it */
export const clientCode = (creator: ICreator): void => {
	const apple = creator.createApple({
		color: 'red',
		price: 2.8,
		quantity: 20
	});

	console.log(apple);
	console.log(apple.getName());

	const banana = creator.createBanana({
		color: 'yellow',
		price: 3.9,
		quantity: 3
	});

	console.log(banana);
	console.log(banana.getName());
}
