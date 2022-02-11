import { ConcreteFactory1, ConcreteFactory2, clientCode } from './example';
import { Creator, clientCode as client } from './use-case';

describe('abstract-factory', (): void => {
	it('should execute abstract factory', (): void => {
		/**
		 * The client code can work with any concrete factory class.
		 */
		console.log('Client: Testing client code with the first factory type...');
		clientCode(new ConcreteFactory1());

		console.log('');

		console.log('Client: Testing the same client code with the second factory type...');
		clientCode(new ConcreteFactory2());
	});

	it('should create different products from factory', (): void => {
		client(new Creator());
	})
})