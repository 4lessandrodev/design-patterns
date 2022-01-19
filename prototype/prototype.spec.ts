import { Car } from './prototype';

describe('prototype-method', () => {
	it('should create a clone', () => {

		const ferrari = new Car(400, 3);
		
		expect(ferrari).toEqual({ speed: 400, doors: 3 });

		const porsche = ferrari.clone();

		expect(porsche).toEqual(ferrari);
	});
});
