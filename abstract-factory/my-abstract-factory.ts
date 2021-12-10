interface IApple { 
	price: number;
	quantity: number;
	color: string;
}

interface IBanana {
	price: number;
	quantity: number;
	color: string;
}

interface ICreator {

	createBanana(props: IBanana): IBanana;
	createApple(props: IApple): IApple;

}

class Apple implements IApple {
	constructor(
		public price: number,
		public quantity: number,
		public color: string,
	){}
}

class Banana implements IBanana {
	constructor(
		public price: number,
		public quantity: number,
		public color: string,
	){}
}

export class Creator implements ICreator {
	createBanana({ price, color, quantity }: IBanana): IBanana {
		return new Banana(price, quantity, color);
	}
	createApple({ price, color, quantity }: IApple): IApple {
		return new Apple(price, quantity, color)
	}
}

export const clientCode = (creator: ICreator): void => {
	const apple = creator.createApple({
		color: 'red',
		price: 2.8,
		quantity: 20
	});

	console.log(apple);

	const banana = creator.createBanana({
		color: 'yellow',
		price: 3.9,
		quantity: 3
	});

	console.log(banana);
}
