import { Cart, clientCode } from "./composite";

describe('composite', () => {
	it('shout add differents products on cart and calculate total', () => {

		const cart = new Cart();
		clientCode(cart);

		expect(cart.calculateTotal()).toBe(900);
	})
})