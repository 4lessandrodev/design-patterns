import { client, MyBuilder } from "./my-builder";

describe('builder pattern', () => {
	it('should create a red car', () => {

		client(new MyBuilder());

	});
})