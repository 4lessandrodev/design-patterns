import { clientCode } from './use-case';

describe('command', () => {
	it('should chat', () => {
		const result = clientCode();
		expect(result).toBe(0);
	})
})