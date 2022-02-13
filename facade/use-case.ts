/** Example as system interface used on system */
interface IFileSystem {
	startSystem(): void;
	createFolder(name: string): void;
	saveFileOnFolder(file: string, folder: string): void;
	shutdown(): void;
}

/** Example as system lib used on facade */
export class Windows implements IFileSystem {
	startSystem(): void {
		console.log('[windows] started with success');
	}
	createFolder(name: string): void {
		console.log(`[windows] folder: "${name}" created with success`);
	}
	saveFileOnFolder(file: string, folder: string): void {
		console.log(`[windows] file:${file} added  to folder: "${folder}" with success`);
	}
	shutdown(): void {
		console.log('[windows] shutting down');
	}
}

/** Example as system lib used on facade */
export class Linux implements IFileSystem {
	startSystem(): void {
		console.log('[linux] started with success');
	}
	createFolder(name: string): void {
		console.log(`[linux] folder: "${name}" created with success`);
	}
	saveFileOnFolder(file: string, folder: string): void {
		console.log(`[linux] file:${file} added  to folder: "${folder}" with success`);
	}
	shutdown(): void {
		console.log('[linux] shutting down');
	}
}

/** Facade implementation */
export class Facade {
	protected windows: IFileSystem;
	protected linux: IFileSystem;

	constructor(windows: IFileSystem, linux: IFileSystem) {
		this.windows = windows;
		this.linux = linux;
	}

	operation(): number {
		this.windows.startSystem();
		this.linux.startSystem();

		this.windows.createFolder('c:\\users\\logs');
		this.linux.createFolder('/home/user/logs');

		this.linux.saveFileOnFolder('log.txt', '/home/user/logs');
		this.windows.saveFileOnFolder('log.txt', 'c:\\users\\logs');

		this.linux.shutdown();
		this.windows.shutdown();

		return (0);
	}
}

/** client code */
export const clientCode = (facade: Facade): number => {
	return facade.operation();
}
