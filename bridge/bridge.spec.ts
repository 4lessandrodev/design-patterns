import { ClientCode, ExtendedGUIAbstraction, GUIAbstraction, RadioController, TVController } from "./bridge";

describe('bridge design pattern', () => {

	it('test operations', () => {

		const tvController = new TVController();
		const radioController = new RadioController();
		
		const platform1 = new GUIAbstraction(tvController);
		const platform2 = new GUIAbstraction(radioController);
		const platform2Extended = new ExtendedGUIAbstraction(radioController);
		
		const tvSpy = jest.spyOn(tvController, 'log');
		ClientCode(platform1);
		
		expect(tvSpy).toHaveBeenCalledTimes(3);
		
		const radioSpy = jest.spyOn(radioController, 'log');
		ClientCode(platform2);
		
		expect(radioSpy).toHaveBeenCalledTimes(3);

		const extendedSpy = jest.spyOn(platform2Extended, 'log');
		ClientCode(platform2Extended);

		expect(extendedSpy).toHaveBeenCalledTimes(1);
	});
});
