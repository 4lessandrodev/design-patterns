import { clientCode, Facade, Linux, Windows } from "./use-case";

describe('facade', () => {
	it('should make operation with success', () => {

		const windows = new Windows();
		const linux = new Linux();
		const facade = new Facade(windows, linux);

		const result = clientCode(facade);

		expect(result).toBe(0);

	});
});
