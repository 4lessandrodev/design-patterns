
/** Defines a default interface */
interface IHandle {
	execute<T>(req: T): Promise<T> | null;
	setNextHandle(handle: IHandle): IHandle
}

/** Create a base handle */
export abstract class AbstractHandler implements IHandle {

	private nextHandle: IHandle | null = null;

	/** Execute next handle */
	public execute<T>(req: T): Promise<T> | null {
		if (this.nextHandle) {
			return this.nextHandle.execute(req);
		}
		return null;
	}

	/** Set next handle */
	public setNextHandle(handle: IHandle): IHandle {
		this.nextHandle = handle;
		return this.nextHandle;
	}
}

