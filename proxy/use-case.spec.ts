import { clientCode } from './use-case';

describe('proxy', () => {
	it('should can access with success', async () => {
		const result = await clientCode('success access');

		expect(result).toBe('success access');
	});

	it('should can not access use-case', async () => {
		const result = await clientCode('invalid');

		expect(result).toBe('permission denied');
	});
});
