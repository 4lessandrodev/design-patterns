import { clientCode } from "./use-case";

describe('chain-of-responsibility', () => {
	it('should process a payment pipeline', () => {
		const result = clientCode();
		expect(result).toBe(0);
	});
});
