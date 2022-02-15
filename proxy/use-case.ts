// common interface to proxy and useCase
interface IUseCase<T> {
	execute(data: T): Promise<T>
}

// real useCase implementation
class UseCase<T> implements IUseCase<T> {
	execute(data: T): Promise<T> {

		// some logic
		return new Promise((resolve) => resolve(data));
	}
}

// proxy implementation
export class ProxyPermission<T> implements IUseCase<T>{
	
	constructor(private readonly useCase: IUseCase<T>){}
	
	// do stuff and calls injected service
	execute(data: T): Promise<T> {
		
		const canAccess = this.canAccess(data);

		if (!canAccess) {
			throw new Error("permission denied");
		}
		return this.useCase.execute(data);
	}
	
	// you may use some business logic
	private canAccess(data: T): boolean {
		console.log('checking access for resource: ', data);
		return true;
	}
}

// client code 
export const clientCode = <T>(data: T): Promise<T> => {
	
	const useCase = new UseCase<T>();
	const proxyCase = new ProxyPermission<T>(useCase);
	
	return proxyCase.execute(data);
}
