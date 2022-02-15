import { clientCode } from './use-case';

describe('proxy', () => {
	it('should can access with success', async () => {
		const result = await clientCode('hello');

		expect(result).toBe('hello');
	});
});
