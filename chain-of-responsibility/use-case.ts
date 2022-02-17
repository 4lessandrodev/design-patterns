
/** Defines a default interface */
interface IHandle<T, D> {
	execute(req: T): D | null;
	setNextHandle<T, D>(handle: IHandle<T, D>): IHandle<T, D>
}

/** Create a base handle */
export abstract class AbstractHandler<T, D> implements IHandle<T, D> {

	protected nextHandle: IHandle<any, any> | null = null;

	public execute(req: T): D | null {
		if (this.nextHandle) {
			return this.nextHandle.execute(req);
		}
		return null;
	}

	public setNextHandle<T, D>(handle: IHandle<T, D>): IHandle<T, D> {
		this.nextHandle = handle;
		return this.nextHandle;
	}
}

export class CalculateTotal extends AbstractHandler<number[], number> {

	public execute(req: number[]): number | null {
		const total = req.reduce((total, value) => total + value, 0);

		if (total === 0) {
			return (0)
		}

		if (!this.nextHandle) {
			return (total);
		}

		console.log('[CalculateTotal]: Total calculated: R$ ', total);
		return this.nextHandle.execute(total)
	}
	
}

class CreatePayment extends AbstractHandler<number, boolean> {

	execute(req: number): boolean | null {

		if (req > 1000) {
			return false;
		}

		if (!this.nextHandle) {
			return true;
		}

		console.log('[CreatePayment]: Payment created: R$ ', req);
		return this.nextHandle.execute(true);
	}
	
}

class SendPaymentNote extends AbstractHandler<boolean, string> {

	execute(req: boolean): string | null {

		if (!req) {
			return 'fail to process payment!!!';
		}

		if (!this.nextHandle) {
			console.log('[SendPaymentNote]: Notification send and finish step');
			return 'success!!!';
		}
		
		return this.nextHandle.execute('payment notification');
	}
	
}

export const clientCode = (): number => {
	console.log('[Client]: started');

	const itemsPrice = [100, 200, 120, 300, 10, 21, 42];

	const calculation = new CalculateTotal();
	const createPayment = new CreatePayment();
	const sendNotification = new SendPaymentNote();

	// Set pipeline
	calculation.setNextHandle(createPayment).setNextHandle(sendNotification);


	const result = calculation.execute(itemsPrice);

	console.log('[Client]: ', result);

	return (0);
}
