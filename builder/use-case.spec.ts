import { client, MyBuilder } from "./use-case";

describe('builder pattern', () => {
	it('should create a red car', () => {

		client(new MyBuilder());

	});
})