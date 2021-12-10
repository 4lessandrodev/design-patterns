import { clientCode, ConcreteCreator1, ConcreteCreator2 } from "./index";
import { clientDelivery, BikeCreator, TruckCreator } from './my-factory-method';

describe('factory-method', (): void => {
	it('should execute factory method with success', (): void => {
		/**
		 * The Application picks a creator's type depending on the configuration or
		 * environment.
		 */
		console.log('App: Launched with the ConcreteCreator1.');
		clientCode(new ConcreteCreator1());
		console.log('');

		console.log('App: Launched with the ConcreteCreator2.');
		clientCode(new ConcreteCreator2());
	})

	it('should execute bike delivery', () => {
		clientDelivery(new BikeCreator()); // Delivery by bike
	})

	it('should execute truck delivery', () => {
		clientDelivery(new TruckCreator()); // Delivery by truck
	})
})
