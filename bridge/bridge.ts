/**
 * Domain interface. 
 * What methods domain class must implements
 */
interface ControllerInterface {
	on: () => void;
	off: () => void;
	log: (info: string) => void;
}

/**
 * Application layer abstraction.
 * Defines client upstream methods
 */
export class GUIAbstraction {
	protected implementation: ControllerInterface;

	constructor(implementation: ControllerInterface) {
		this.implementation = implementation;
	}

	on(): void {
		return this.implementation.on();
	}

	off(): void {
		return this.implementation.off();
	}

	log(info: string): void {
		return this.implementation.log(info);
	}
}

/**
 * Extended application abstraction.
 * Case some method needs to be changed
 */
export class ExtendedGUIAbstraction extends GUIAbstraction {
	public log(info: string): void {
		console.log('[ExtendedGUIAbstraction]: ', info);
	}
}

/**
 * Implementation for one specific use case or platform
 */
export class TVController implements ControllerInterface {
	
	on(): void {
		this.log('TV is on!');
	};

	off(): void {
		this.log('TV is off!');
	};

	log(info: string): void {
		console.log('[TVController]: ', info);
	};
}

/**
 * Implementation for another specific use case or platform
 */
export class RadioController implements ControllerInterface {
	
	on(): void {
		this.log('Radio is on!');
	};

	off(): void {
		this.log('Radio is off!');
	};

	log(info: string): void {
		console.log('[RadioController]: ', info);
	};
}

export const ClientCode = (implementation: GUIAbstraction) => {
	implementation.on();
	implementation.off();
	implementation.log('Done!');
};
