import { Connection } from "./singleton";

describe('singleton', () => {
	it('should create once a instance', () => {
		const instanceOne = Connection.create();
		
		const instanceTwo = Connection.create();

		const instanceThree = Connection.create();

		expect(instanceOne.total).toBe(1);
		expect(instanceTwo.total).toBe(1);
		expect(instanceThree.total).toBe(1);
	});
});
