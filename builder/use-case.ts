

interface IBuilder<T> {
	addDoor: (quantity: number) => IBuilder<T>;
	addEngine: (horse: number) => IBuilder<T>;
	addTires: (quantity: number) => IBuilder<T>;
	addColor: (color: string) => IBuilder<T>;
	default: () => Partial<T>;
	getResult: () => Partial<T>;
}

interface ICar {
	doors: number;
	engine: number;
	tires: number;
	color: string;
}

export class MyBuilder implements IBuilder<ICar> {

	private car: Partial<ICar>;
	private readonly defaultCar: Partial<ICar> = {
		doors: 4,
		tires: 4,
		color: 'black',
		engine: 100
	};

	constructor(car?: Partial<ICar>) {
		this.car = Object.assign({}, {...this.defaultCar }, { ...car ?? {}});
	}

	addDoor(quantity: number): IBuilder<ICar> {
		this.car.doors = quantity;
		return this;
	};

	addEngine(horse: number): IBuilder<ICar> {
		this.car.engine = horse;
		return this;
	};

	addTires(quantity: number): IBuilder<ICar>{
		this.car.tires = quantity;
		return this;
	};
	
	addColor(color: string): IBuilder<ICar> {
		this.car.color = color;
		return this;
	};

	default(): Partial<ICar> {
		return new MyBuilder().getResult();
	};

	getResult(): Partial<ICar> {
		return this.car;
	};
}

export const client = (builder: IBuilder<ICar>): void => {
	
	console.log('default car', builder.default());

	builder.addColor('red');
	builder.addDoor(3);
	builder.addEngine(300);

	console.log('result car', builder.getResult())
}
