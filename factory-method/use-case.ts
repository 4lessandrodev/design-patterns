interface Delivery {
	operation(): void
}

abstract class Factory {
	public abstract create(): Delivery;

	public DoDelivery(): void {
		const vehicle = this.create();
		vehicle.operation();
	}
}

export class TruckCreator extends Factory {

	public create(): Delivery {
		return new Truck()
	}
}

export class BikeCreator extends Factory {
	public create(): Delivery {
		return new Bike()
	}
}

export class Bike implements Delivery {
	operation(): void {
		console.log('A item was delivered by bike')
	}
}

export class Truck implements Delivery {
	operation(): void {
		console.log('A item was delivered by truck');
	}
}

export const clientDelivery = (factory: Factory): void => {
	factory.DoDelivery();
}
